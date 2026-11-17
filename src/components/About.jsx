import React from "react";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "TanStack Query", "Tailwind CSS", "HTML", "CSS/SCSS", "Accessibility"], level: 95, label: "10+ yrs" },
    { category: "Backend & data", items: ["Go", "PostgreSQL", "Node.js", "REST/OpenAPI", "Supabase", "Redis"], level: 55, label: "since 2026" },
    { category: "Practices", items: ["Design docs & ERDs", "AI coding agents", "Code review", "Stakeholder demos"], level: 75, label: "daily" },
    { category: "Delivery", items: ["GitHub Actions", "AWS", "Vercel", "Google Cloud", "Git"], level: 50, label: "daily use" },
    { category: "Terminal", items: ["Ghostty", "tmux", "Neovim", "zsh + Starship", "fzf", "ripgrep", "git-delta", "gh CLI", "Claude Code", "Hammerspoon"], level: 90, label: "~/home" },
    { category: "Learning", items: ["Go", "Data Structures", "Algorithms", "System Design"], level: 45, label: "in progress" },
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
                <span className="terminal-value">full-stack (react + go)</span>
              </div>
              <div className="terminal-neofetch-row">
                <span className="terminal-key">Network</span>
                <span className="terminal-value">Toptal (Top 3%)</span>
              </div>
              <div className="terminal-neofetch-row">
                <span className="terminal-key">Clients</span>
                <span className="terminal-value">Index Risk, Gartner, Zobrist, +more</span>
              </div>
            </div>
          </div>

          <div className="terminal-about-text">
            <div className="terminal-comment"># Professional Summary</div>
            <p className="terminal-paragraph">
              15 years building for the web, the last decade as a Toptal engineer
              (top 3%) for clients like Gartner and Zobrist (The North Face, VANS,
              Timberland). In 2026 I moved from frontend to full-stack at Index
              Risk, a specialty insurance MGU: I joined as the only frontend
              engineer and now own features end to end, from the design doc and
              ERDs to the React UI and the Go and PostgreSQL API, built with AI
              coding agents and reviewed by me.
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
                    <span className="terminal-skill-percent">{skill.label}</span>
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
