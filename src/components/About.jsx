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
    <div className="section">
      <h2>About</h2>
      <p className="about-intro">
        I'm Lucas Bittar Magnani, a frontend developer with 15 years of
        experience creating impactful web solutions, including a decade as a
        Toptal talent working with global leaders like Gartner, BVA, and
        Zobrist. I've architected scalable applications for data-driven
        platforms and e-commerce giants like The North Face and VANS.
      </p>
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
