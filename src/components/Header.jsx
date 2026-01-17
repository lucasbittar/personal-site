import React from "react";
import content from "../data/content.json";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <ThemeToggle />
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
          <p className="header-intro">{content.intro}</p>
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
