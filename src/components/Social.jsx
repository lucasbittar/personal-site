import React from "react";
import content from "../data/content.json";

const Social = () => {
  const { social } = content;

  return (
    <div className="section social-section">
      <h2>Let's Connect</h2>
      <p>
        Want to chat, collaborate, or just say hi? I'm always open to
        interesting conversations and new opportunities.
      </p>
      <div className="contact">
        <a href={`mailto:${social.email}`} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Email</span>
          <i className="fa-solid fa-at"></i>
        </a>
        <a href={social.substack} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">Substack</span>
          <i className="fa-solid fa-newspaper"></i>
        </a>
        <a href={social.youtube} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">YouTube</span>
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">LinkedIn</span>
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">X</span>
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href={social.github} target="_blank" rel="noopener noreferrer">
          <span className="sr-only">GitHub</span>
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
