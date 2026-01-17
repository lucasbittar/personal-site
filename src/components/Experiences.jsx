import React from "react";
import content from "../data/content.json";

const Experience = () => {
  const { experiences } = content;

  return (
    <section className="terminal-section">
      <div className="terminal-section-window">
        <div className="terminal-section-header">
          <span className="terminal-section-title">
            <span className="terminal-prompt">$</span> git log --oneline ~/career/
          </span>
          <span className="terminal-section-status">
            {experiences.length} commits
          </span>
        </div>

        <div className="terminal-section-content">
          <div className="terminal-comment"># Professional experience via Toptal network</div>

          <div className="terminal-git-log">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="terminal-commit">
                <div className="terminal-commit-header">
                  <span className="terminal-commit-hash">
                    {experience.id.substring(0, 7)}
                  </span>
                  <span className="terminal-commit-date">{experience.period}</span>
                  {index === 0 && (
                    <span className="terminal-commit-head">HEAD</span>
                  )}
                </div>
                <div className="terminal-commit-message">
                  <span className="terminal-commit-title">{experience.title}</span>
                  <span className="terminal-commit-company">@ {experience.company}</span>
                </div>
                <div className="terminal-commit-body">
                  {experience.description}
                </div>
                <div className="terminal-commit-tags">
                  {experience.tech.map((tech, i) => (
                    <span key={i} className="terminal-tech-tag">
                      [{tech}]
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="terminal-prompt-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cursor">█</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
