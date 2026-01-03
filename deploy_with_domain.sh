#!/bin/bash
set -e

# ---------------- INPUT ----------------
REPO_URL=$1
NAMESPACE=${2:-yashtesting}
# -------------------------------------



DOMAIN=nstsdc.org


if [ -z "$REPO_URL" ]; then
  echo "Usage: ./deploy_with_domain.sh <github-repo-url> [domain] [namespace]"
  exit 1
fi

# ---------------- EXTRACT INFO ----------------
REPO_NAME=$(basename -s .git "$REPO_URL" | tr '[:upper:]' '[:lower:]')
GITHUB_USER=$(echo "$REPO_URL" | awk -F'/' '{print $(NF-1)}' | tr '[:upper:]' '[:lower:]')

IMAGE_TAG=$(git ls-remote "$REPO_URL" HEAD | awk '{print substr($1,1,7)}')
IMAGE="ghcr.io/${GITHUB_USER}/${REPO_NAME}:${IMAGE_TAG}"

echo "📦 Repo       : $REPO_NAME"
echo "👤 GHCR User  : $GITHUB_USER"
echo "🐳 Image      : $IMAGE"
echo "🌍 Domain     : ${REPO_NAME}.${DOMAIN}"

# ---------------- CLONE ----------------
if [ ! -d "$REPO_NAME" ]; then
  git clone "$REPO_URL"
fi
cd "$REPO_NAME"

# ---------------- DOCKERFILE ----------------
if [ ! -f Dockerfile ]; then
  echo "📄 Creating Dockerfile..."
  cat <<EOF > Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
EOF
fi

# ---------------- BUILD & PUSH ----------------
echo "🐳 Building image..."
docker build --platform linux/amd64 -t "$IMAGE" .

echo "📤 Pushing image to GHCR..."
docker push "$IMAGE"

# ---------------- K8s DEPLOYMENT ----------------
cat <<EOF > deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: $REPO_NAME
  namespace: $NAMESPACE
spec:
  replicas: 1
  selector:
    matchLabels:
      app: $REPO_NAME
  template:
    metadata:
      labels:
        app: $REPO_NAME
    spec:
      containers:
      - name: $REPO_NAME
        image: $IMAGE
        ports:
        - containerPort: 3000
EOF

# ---------------- SERVICE (ClusterIP) ----------------
cat <<EOF > service.yaml
apiVersion: v1
kind: Service
metadata:
  name: ${REPO_NAME}-service
  namespace: $NAMESPACE
spec:
  type: ClusterIP
  selector:
    app: $REPO_NAME
  ports:
  - port: 3000
    targetPort: 3000
EOF

# ---------------- INGRESS ----------------
cat <<EOF > ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ${REPO_NAME}-ingress
  namespace: $NAMESPACE
spec:
  spec.ingressClassName: traefik
  rules:
  - host: ${REPO_NAME}.${DOMAIN}
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: ${REPO_NAME}-service
            port:
              number: 3000
EOF

# ---------------- APPLY ----------------
echo "🚀 Deploying to k3s..."
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml

echo "⏳ Waiting for pod..."
kubectl wait --for=condition=Ready pod -l app=$REPO_NAME -n $NAMESPACE --timeout=180s

# ---------------- FINAL OUTPUT ----------------
echo ""
echo "✅ DEPLOYMENT COMPLETE"
echo "🌐 Application URL:"
echo "➡️  http://${REPO_NAME}.${DOMAIN}"
echo ""
