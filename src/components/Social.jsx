import React from "react";

const Social = () => {
  return (
    <div className="section">
      <h2>Contact</h2>
      <p>Let’s create something impactful together! Connect with me at:</p>
      <div className="contact">
        <a href="mailto:lucasbittarmagnani@gmail.com" target="_blank">
          <span className="sr-only">Email</span>
          <i class="fa-solid fa-at"></i>
        </a>
        <a href="https://www.linkedin.com/in/lucasbittar" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
          <span className="sr-only">LinkedIn</span>
        </a>
        <a href="https://x.com/lucasbittar_dev" target="_blank">
          <span className="sr-only">X</span>
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://github.com/lucasbittar_dev" target="_blank">
          <span className="sr-only">GitHub</span>
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
