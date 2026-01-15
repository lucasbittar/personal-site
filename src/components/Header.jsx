import React from "react";

const Header = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-name">
          <h1>
            LUCAS
            <br />
            BITTAR
          </h1>
        </div>
        <div className="header-divider"></div>
        <div className="header-description">
          <h2>
            Senior Frontend Engineer specializing in JavaScript, React, and modern
            UI/UX design. Building intuitive, high-performance web experiences
            with 15 years of expertise.
          </h2>
        </div>
      </div>
      <div className="scroll-indicator" onClick={scrollToContent}>
        <span className="scroll-indicator-text">Scroll</span>
        <div className="scroll-arrow-container">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
