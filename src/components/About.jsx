import React from "react";

const About = () => {
  return (
    <div className="section">
      <h2>About me</h2>
      <p>
        I’m Lucas Bittar Magnani, a frontend developer with 15 years of
        experience creating impactful web solutions, including a decade as a
        Toptal talent working with global leaders like Gartner, BVA, and
        Zobrist. Specializing in JavaScript, React, and modern UI/UX design,
        I’ve architected scalable applications for data-driven platforms and
        e-commerce giants like The North Face and VANS. Currently, I’m
        sharpening my Computer Science fundamentals — Data Structures,
        Algorithms, and System Design — to elevate my skills for FAANG-level
        opportunities. When I’m not coding, I explore music and share my
        inspirations through my YouTube series, Introducing Songs.
      </p>
      <ul className="skills-list">
        <li className="skill-item">
          <strong>Frontend</strong>: JavaScript, React, TypeScript, HTML,
          CSS/SCSS, UI/UX, Accessibility
        </li>
        <li className="skill-item">
          <strong>Backend (Collaboration)</strong>: Node.js
        </li>
        <li className="skill-item">
          <strong>Mobile</strong>: ReactNative
        </li>
        <li className="skill-item">
          <strong>Tools</strong>: VIM, TMUX, Git, Chrome DevTools
        </li>
        <li className="skill-item">
          <strong>Learning</strong>: Data Structures, Algorithms, System Design
        </li>
      </ul>
    </div>
  );
};

export default About;
