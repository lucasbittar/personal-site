import React from "react";
import GA4 from 'react-ga4';

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "Simple and basic weather app. This app is a way I can keep up-to-date to the technology as it evolves. I started it 10 years ago as a General Assembly class project and it's become my experimental sandbox.",
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
      "A music tracking and visualization app built with JavaScript, integrating the Last.fm API to scrobble user listening history and display personalized music insights",
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
  {
    id: 3,
    title: "FastFeet",
    description:
      "A full-blown application including frontend, backend and mobile app for a fictitious logistics company, built with React, Node.JS and ReactNative. Enables administrators to manage orders, delivery personnel, and recipients through a responsive dashboard, with a focus on intuitive UI/UX and performance optimization.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/lucasbittar/gostack-fastfeet",
      },
    ],
  },
];

const Projects = () => {

  const handleProjectClick = (e) => {
    GA4.event({
      category: 'Projects',
      action: 'Click',
      label: `URL: ${e.target.href}`,
    });
  }

  return (
    <div className="section">
      <h2>Projects</h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li className="project-item" key={project.id}>
            <div className="project-number">0{index + 1}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
