import React from "react";
import GA4 from "react-ga4";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A weather application that's evolved with technology over 10 years. Started as a General Assembly class project and has become my experimental sandbox for trying new approaches and staying current.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/lucasbittar/weatherapp",
      },
      {
        name: "Live Demo",
        url: "https://lucasbittar.dev/projects/weatherapp",
      },
    ],
  },
  {
    id: 2,
    title: "MyScrobble",
    description:
      "A music tracking and visualization app built with JavaScript, integrating the Last.fm API to scrobble listening history and display personalized music insights.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/lucasbittar/myscrobble",
      },
      {
        name: "Live Demo",
        url: "https://lucasbittar.dev/projects/myscrobble",
      },
    ],
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
    <div className="section projects-section">
      <h2>Projects</h2>
      <p className="section-intro">
        Side projects where I experiment with ideas and learn new things.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-item"
            key={project.id}
            data-number={`0${index + 1}`}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className="project-links">
              {project.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  onClick={handleProjectClick}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
