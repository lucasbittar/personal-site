import React from "react";

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
        url: "https://lucasbittar.rocks/projects/weatherapp",
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
        url: "https://lucasbittar.rocks/projects/myscrobble",
      },
    ],
  },
  {
    id: 3,
    title: "FastFeet",
    description:
      "A web application for a fictitious logistics company, built with React and JavaScript. Enables administrators to manage orders, delivery personnel, and recipients through a responsive dashboard, with a focus on intuitive UI/UX and performance optimization.",
    links: [
      {
        name: "GitHub",
        url: "https://github.com/lucasbittar/gostack-fastfeet",
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="section">
      <h2>Projects</h2>
      <ul className="projects-list">
        {projects.map((project) => (
          <li className="project-item" key={project.id}>
            <div className="project-header">
              <strong>{project.title}</strong>
              <span>
                {project.links.map((link, index) => (
                  <span key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                    {index < project.links.length - 1 && " | "}
                  </span>
                ))}
              </span>
            </div>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
