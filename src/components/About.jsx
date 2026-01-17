import React from "react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: "JavaScript, React, TypeScript, HTML, CSS/SCSS, UI/UX, Accessibility",
    },
    {
      category: "Backend",
      items: "Node.js",
    },
    {
      category: "Mobile",
      items: "React Native",
    },
    {
      category: "Tools",
      items: "VIM, TMUX, Git, Chrome DevTools",
    },
    {
      category: "Learning",
      items: "Data Structures, Algorithms, System Design",
    },
  ];

  return (
    <div className="section about-section">
      <h2>Work</h2>
      <div className="about-content">
        <p className="about-intro">
          With 15 years of experience, I've built impactful web solutions for
          global companies. For the past decade, I've worked as a Toptal talent,
          collaborating with leaders like Gartner, BVA, and Zobrist. I've
          architected scalable applications for data-driven platforms and
          e-commerce giants including The North Face and VANS.
        </p>
        <div className="toptal-inline-badge">
          <a
            href="https://www.toptal.com/developers/resume/lucas-bittar-magnani#NW70m2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="toptal-badge-text">Top 3% on Toptal</span>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <h5>Skills & Expertise</h5>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li className="skill-item" key={index}>
            <strong>{skill.category}</strong>
            <span>{skill.items}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
