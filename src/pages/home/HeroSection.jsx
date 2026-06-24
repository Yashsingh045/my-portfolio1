export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title hero--greeting">Hey, I'm Yash 👋</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color hero--typed-text">Full-Stack Developer</span>
            <br />
            <span className="hero--section-title--sub">& Cloud Enthusiast</span>
          </h1>
          <p className="hero--section-description">
            I'm a passionate software engineer with a knack for developing.
            <br />I thrive in collaborative environments and enjoy working with diverse personalities. Let's connect and explore opportunities to innovate together!
          </p>
          <div className="hero--badges">
            <span className="hero--badge">React</span>
            <span className="hero--badge">Python</span>
            <span className="hero--badge">DevOps</span>
            <span className="hero--badge">AI/ML</span>
          </div>
        </div>
        <div className="hero--cta">
          <a
            href="mailto:astomar6396@gmail.com?subject=Let's Connect&body=Hi, I'd like to connect with you!"
          >
            <button className="btn btn-primary">Let's Connect</button>
          </a>
          <a href="https://drive.google.com/file/d/1HPv-bV4hmE8jZ8mTd_XZ9HAo8csjcAMz/view?usp=drive_link" target="_blank" rel="noreferrer">
          {/* <a href="https://my.newtonschool.co/api/v1/user/astomar6396/resume/?latex=true" target="_blank" rel="noreferrer"> */}
            <button className="btn btn-outline-primary">View Resume</button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <div className="hero--img--wrapper">
          <img src="./images/pic2.png" alt="Hero Section" />
        </div>
      </div>
    </section>
  );
}