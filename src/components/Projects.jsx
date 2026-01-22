import React from "react";
import GA4 from "react-ga4";

const projects = [
  {
    id: 1,
    name: "weatherapp",
    title: "Weather Terminal v3.0",
    description:
      "A retro-inspired, command-line interface (CLI) weather application built with React. It combines a nostalgic 80s terminal aesthetic with real-time data fetching to provide a distraction-free weather forecasting experience.",
    links: [
      { name: "source", url: "https://github.com/lucasbittar/weatherapp" },
      { name: "demo", url: "https://weatherapp-kohl-tau.vercel.app/" },
    ],
    tags: ["Full-stack", "React", "TypeScript", "OpenWeather API", "Geolocation", "Gemini AI"],
    status: "active",
  },
  {
    id: 2,
    name: "myscrobble",
    title: "MyScrobble.fm",
    description:
      "MyScrobble transforms your Spotify listening data into meaningful insights. Connect your Spotify account and discover patterns in your music taste, get AI-powered recommendations, find concerts near you, and create shareable cards of your top artists and tracks.",
    links: [
      { name: "source", url: "https://github.com/lucasbittar/myscrobble" },
      { name: "demo", url: "https://myscrobble.fm" },
    ],
    tags: ["Full-stack", "React", "Next.js", "TypeScript", "Spotify API", "Gemini AI", "Data Visualization"],
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

                {project.tags && project.tags.length > 0 && (
                  <div className="terminal-project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="terminal-tech-tag">
                        [{tag}]
                      </span>
                    ))}
                  </div>
                )}

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
