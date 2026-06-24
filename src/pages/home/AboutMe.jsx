export default function AboutMe() {
  const highlights = [
    { icon: "🎓", label: "CS & AI/ML Student", sub: "Newton School of Technology, Pune" },
    { icon: "💼", label: "Full-Stack Developer", sub: "React • Node.js • Python" },
    { icon: "☁️", label: "DevOps Learner", sub: "Docker • Kubernetes • Linux" },
    { icon: "🏸", label: "Badminton Enthusiast", sub: "Sports & Fitness" },
  ];

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./images/pic3.png" alt="About Me" style={{ height: "90%", width: "90%", borderRadius: "50%" }} />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="sub--title about--subtitle">Get to know me better</p>
          <h1 className="skills-section--heading about--heading">About Me</h1>
          <p className="hero--section-description">
            Hello, I am <strong>Yashveer Singh</strong> from Agra, Uttar Pradesh.
            I am currently a student at Newton School of Technology, Pune,
            pursuing Computer Science and Engineering with a specialization in
            AI &amp; ML.
          </p>
          <p className="hero--section-description">
            Apart from coding, I love to play Badminton.
            Currently, I am learning Full-Stack DevOps.
          </p>
          <div className="about--highlights">
            {highlights.map((h, i) => (
              <div key={i} className="about--highlight--card">
                <span className="about--highlight--icon">{h.icon}</span>
                <div>
                  <p className="about--highlight--label">{h.label}</p>
                  <p className="about--highlight--sub">{h.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero--cta">
          <a href="https://drive.google.com/file/d/1HPv-bV4hmE8jZ8mTd_XZ9HAo8csjcAMz/view?usp=drive_link" target="_blank" rel="noreferrer">
          {/* <a href="https://my.newtonschool.co/api/v1/user/astomar6396/resume/?latex=true" target="_blank" rel="noreferrer"> */}
            <button className="btn btn-outline-primary">
              Checkout Resume
            </button>
          </a>
          <a href="https://www.linkedin.com/in/yashveer-singh-061bb1325/" target="_blank" rel="noreferrer">
            <button className="btn btn-primary">
              LinkedIn Profile
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}