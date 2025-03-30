export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Yash</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">A Learner  </span>{" "}
              <br />
              And A Developer
            </h1>
            <p className="hero--section-description">
                I'm a passionate software engineer with a knack for developing.
                  <br />I thrive in collaborative environments and enjoy working with diverse personalities. Let's connect and explore opportunities to innovate together!
            </p>
          </div>
          <button className="btn btn-primary">Let's Connect</button>
        </div>
        <div className="hero--section--img">
          <img src="./images/pic2.png" alt="Hero Section"  />
        </div>
      </section>
    );
  }