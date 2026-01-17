import React from "react";
import content from "../data/content.json";

const Experience = () => {
  const { experiences } = content;

  return (
    <div className="section">
      <h2>Experience</h2>
      <p className="section-intro">
        A decade of building products through Toptal's network, collaborating with global companies.
      </p>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <div className="experience-card" key={experience.id}>
            <div className="experience-card-header">
              <div>
                <h3>{experience.title}</h3>
                <h4>{experience.company}</h4>
              </div>
              <span className="experience-period">{experience.period}</span>
            </div>
            <p className="experience-description">{experience.description}</p>
            <div className="experience-tech">
              {experience.tech.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
