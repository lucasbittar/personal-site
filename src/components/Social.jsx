import React from "react";
import content from "../data/content.json";

const Social = () => {
  const { social } = content;

  const connections = [
    { key: "email", icon: "@", label: "EMAIL", url: `mailto:${social.email}`, value: social.email },
    { key: "substack", icon: "✎", label: "SUBSTACK", url: social.substack, value: "@lucasbittar" },
    { key: "youtube", icon: "▶", label: "YOUTUBE", url: social.youtube, value: "@lucasbittar" },
    { key: "linkedin", icon: "in", label: "LINKEDIN", url: social.linkedin, value: "/lucasbittar" },
    { key: "twitter", icon: "𝕏", label: "X/TWITTER", url: social.twitter, value: "@lucasbittar_dev" },
    { key: "github", icon: "⌘", label: "GITHUB", url: social.github, value: "lucasbittar" },
  ];

  return (
    <section className="terminal-section terminal-section-connect">
      <div className="terminal-section-window">
        <div className="terminal-section-header">
          <span className="terminal-section-title">
            <span className="terminal-prompt">$</span> ping --connect
          </span>
          <span className="terminal-section-status">
            <span className="status-dot status-dot-green" /> ACCEPTING
          </span>
        </div>

        <div className="terminal-section-content terminal-connect-content">
          <div className="terminal-connect-ascii">
            <pre>{`
 ╔═══════════════════════════════════════╗
 ║  ████████╗ █████╗ ██╗     ██╗  ██╗    ║
 ║  ╚══██╔══╝██╔══██╗██║     ██║ ██╔╝    ║
 ║     ██║   ███████║██║     █████╔╝     ║
 ║     ██║   ██╔══██║██║     ██╔═██╗     ║
 ║     ██║   ██║  ██║███████╗██║  ██╗    ║
 ║     ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    ║
 ╚═══════════════════════════════════════╝
            `}</pre>
          </div>

          <div className="terminal-comment terminal-connect-comment">
            # Want to chat, collaborate, or just say hi?
          </div>
          <div className="terminal-comment">
            # I'm always open to interesting conversations.
          </div>

          <div className="terminal-connections">
            {connections.map((conn) => (
              <a
                key={conn.key}
                href={conn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-connection"
              >
                <span className="terminal-connection-icon">{conn.icon}</span>
                <span className="terminal-connection-label">{conn.label}</span>
                <span className="terminal-connection-arrow">→</span>
              </a>
            ))}
          </div>

          <div className="terminal-footer">
            <div className="terminal-footer-line">
              <span className="terminal-comment">
                # Built with React • Powered by curiosity
              </span>
            </div>
            <div className="terminal-footer-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">exit</span>
              <span className="terminal-value">0</span>
              <span className="terminal-cursor">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
