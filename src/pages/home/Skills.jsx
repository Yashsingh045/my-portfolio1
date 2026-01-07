import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="Skills">
      <div className="portfolio--container">
        <h2 className="sub--title">My Skills</h2>
        <br />
        <h2 className="skills-section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <div className="skills--section--card--img">
                {item?.src?.map((src, i) => {
                  const techName = src.split("/").pop().split(".")[0];
                  return (
                    <div key={i} className="skill--img--container">
                      <img src={src} alt={`${item.title} - ${i}`} />
                      <span className="skill--name--tooltip">{techName}</span>
                    </div>
                  );
                })}
              </div>
              {item.description && (
                <p className="skills--section--description">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}