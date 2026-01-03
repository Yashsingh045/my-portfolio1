#!/bin/bash
set -e

REPO_PATH=$1

if [ -z "$REPO_PATH" ]; then
  echo "❌ Usage: ./build_and_push.sh <path-to-git-repo>"
  exit 1
fi

cd "$REPO_PATH"

GITHUB_USER=$(git config user.name | tr '[:upper:]' '[:lower:]')
REPO_NAME=$(basename "$(git rev-parse --show-toplevel)" | tr '[:upper:]' '[:lower:]')
IMAGE_NAME=$REPO_NAME
TAG=$(git rev-parse --short HEAD)

GHCR_IMAGE="ghcr.io/$GITHUB_USER/$IMAGE_NAME:$TAG"

docker build -t "$GHCR_IMAGE" .
docker push "$GHCR_IMAGE"

echo "✅ Image pushed:"
echo "👉 $GHCR_IMAGE"
