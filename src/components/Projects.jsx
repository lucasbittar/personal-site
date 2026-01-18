import React from "react";
import GA4 from "react-ga4";

const projects = [
  {
    id: 1,
    name: "weatherapp",
    title: "Weather Terminal",
    description:
      "A weather application that's evolved with technology over 10 years. Started as a General Assembly class project and has become my experimental sandbox for trying new approaches and staying current.",
    links: [
      { name: "source", url: "https://github.com/lucasbittar/weatherapp" },
      { name: "demo", url: "https://weatherapp-kohl-tau.vercel.app/" },
    ],
    status: "active",
  },
  {
    id: 2,
    name: "myscrobble",
    title: "MyScrobble",
    description:
      "A music tracking and visualization app built with JavaScript, integrating the Last.fm API to scrobble listening history and display personalized music insights.",
    links: [
      { name: "source", url: "https://github.com/lucasbittar/myscrobble" },
      { name: "demo", url: "https://lucasbittar.dev/projects/myscrobble" },
    ],
    status: "active",
  },
];

const Projects = () => {
  const handleProjectClick = (e) => {
    GA4.event({
      category: "Projects",
      action: "Click",
      label: `URL: ${e.target.href}`,
    });
  };

  return (
    <section className="terminal-section">
      <div className="terminal-section-window">
        <div className="terminal-section-header">
          <span className="terminal-section-title">
            <span className="terminal-prompt">$</span> ls -la ~/projects/
          </span>
          <span className="terminal-section-status">
            {projects.length} repos
          </span>
        </div>

        <div className="terminal-section-content">
          <div className="terminal-comment"># Side projects and experiments</div>

          <div className="terminal-projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="terminal-project-card">
                <div className="terminal-project-header">
                  <span className="terminal-project-index">
                    [{String(index).padStart(2, "0")}]
                  </span>
                  <span className="terminal-project-name">
                    ~/{project.name}/
                  </span>
                  <span className={`terminal-project-status status-${project.status}`}>
                    ● {project.status}
                  </span>
                </div>

                <div className="terminal-project-title">{project.title}</div>

                <div className="terminal-project-readme">
                  <div className="terminal-comment"># README.md</div>
                  <p>{project.description}</p>
                </div>

                <div className="terminal-project-links">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-project-link"
                      onClick={handleProjectClick}
                    >
                      <span className="terminal-prompt">$</span>
                      <span className="terminal-command">open</span>
                      <span className="terminal-flag">--{link.name}</span>
                      <span className="terminal-arrow">→</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
