import React from "react";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["JavaScript", "React", "TypeScript", "HTML", "CSS/SCSS", "UI/UX", "Accessibility"], level: 95 },
    { category: "Backend", items: ["Node.js"], level: 60 },
    { category: "Mobile", items: ["React Native"], level: 70 },
    { category: "Tools", items: ["VIM", "TMUX", "Git", "Chrome DevTools"], level: 85 },
    { category: "Learning", items: ["Data Structures", "Algorithms", "System Design"], level: 45 },
  ];

  return (
    <section className="terminal-section terminal-section-bg terminal-section-work">
      <div className="terminal-section-window">
        <div className="terminal-section-header">
          <span className="terminal-section-title">
            <span className="terminal-prompt">$</span> neofetch --work
          </span>
          <span className="terminal-section-status">
            <span className="status-dot status-dot-green" /> VERIFIED
          </span>
        </div>

        <div className="terminal-section-content">
          <div className="terminal-neofetch">
            <div className="terminal-neofetch-ascii">
              <pre>{`
    ██╗     ██████╗
    ██║     ██╔══██╗
    ██║     ██████╔╝
    ██║     ██╔══██╗
    ███████╗██████╔╝
    ╚══════╝╚═════╝
              `}</pre>
            </div>
            <div className="terminal-neofetch-info">
              <div className="terminal-neofetch-title">lucas@developer</div>
              <div className="terminal-neofetch-separator">─────────────────</div>
              <div className="terminal-neofetch-row">
                <span className="terminal-key">OS</span>
                <span className="terminal-value">Software Engineer v15.0</span>
              </div>
              <div className="terminal-neofetch-row">
                <span className="terminal-key">Uptime</span>
                <span className="terminal-value">15 years</span>
              </div>
              <div className="terminal-neofetch-row">
                <span className="terminal-key">Shell</span>
                <span className="terminal-value">frontend/react</span>
              </div>
              <div className="terminal-neofetch-row">
                <span className="terminal-key">Network</span>
                <span className="terminal-value">Toptal (Top 3%)</span>
              </div>
              <div className="terminal-neofetch-row">
                <span className="terminal-key">Clients</span>
                <span className="terminal-value">Gartner, BVA, Zobrist, +more</span>
              </div>
            </div>
          </div>

          <div className="terminal-about-text">
            <div className="terminal-comment"># Professional Summary</div>
            <p className="terminal-paragraph">
              With 15 years of experience, I've built impactful web solutions for
              global companies. For the past decade, I've worked as a Toptal talent,
              collaborating with leaders like Gartner, BVA, and Zobrist. I've
              architected scalable applications for data-driven platforms and
              e-commerce giants including The North Face and VANS.
            </p>
          </div>

          <a
            href="https://www.toptal.com/developers/resume/lucas-bittar-magnani#NW70m2"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-badge-link"
          >
            <span className="terminal-badge">
              <span className="terminal-badge-icon">★</span>
              <span className="terminal-badge-text">TOP 3% ON TOPTAL</span>
              <span className="terminal-arrow">→</span>
            </span>
          </a>

          <div className="terminal-skills-section">
            <div className="terminal-comment"># Skills & Expertise</div>
            <div className="terminal-command-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">htop</span>
              <span className="terminal-flag">--skills</span>
            </div>

            <div className="terminal-skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="terminal-skill-item">
                  <div className="terminal-skill-header">
                    <span className="terminal-skill-name">{skill.category}</span>
                    <span className="terminal-skill-percent">{skill.level}%</span>
                  </div>
                  <div className="terminal-skill-bar">
                    <div
                      className="terminal-skill-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="terminal-skill-items">
                    {skill.items.map((item, i) => (
                      <span key={i} className="terminal-skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
