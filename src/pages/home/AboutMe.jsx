import { Link } from "react-scroll";
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./images/pic3.png" alt="About Me" style={{ height: "90%", width: "90%", borderRadius: "50%" }} />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">

          <h1 className="skills-section--heading">About Me</h1>
          <p className="section--title">Get to know me better</p>
          <p className="hero--section-description">
            Hello, I am Yashveer Singh from Agra, Uttar Pradesh.
            <br />
            I am currently a student at Newton School of Technology, Pune.
            <br />
            I am pursuing my degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning.
          </p>
          <p className="hero--section-description">
            Apart from coding, I love to play Badminton.
            <br />
            Currently I am learning Full-Stack DevOps.
          </p>
        </div>
        <br />
        <br />
        <br />
        <a href="https://my.newtonschool.co/api/v1/user/astomar6396/resume/?latex=true">
          <button
            className="btn btn-outline-primary"
          >
            Checkout Resume
          </button>
        </a>
      </div>
    </section>
  );
}