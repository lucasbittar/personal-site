import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.body.classList.add("light-theme");
    }
  }, []);

  const toggleTheme = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }

    // Reset animation state
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      className={`crt-theme-toggle ${isAnimating ? 'crt-toggle-switching' : ''}`}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Scanlines overlay */}
      <div className="crt-toggle-scanlines" />

      {/* Panel content */}
      <div className="crt-toggle-panel">
        {/* Header with label */}
        <div className="crt-toggle-header">
          <span className="crt-toggle-label">PWR</span>
          <span className={`crt-toggle-led ${isDark ? 'crt-led-green' : 'crt-led-amber'}`} />
        </div>

        {/* Toggle switch */}
        <div className="crt-toggle-switch">
          <div className={`crt-toggle-track ${isDark ? 'crt-track-dark' : 'crt-track-light'}`}>
            <div className="crt-toggle-thumb" />
          </div>
        </div>

        {/* Mode indicator */}
        <div className="crt-toggle-mode">
          <span className={`crt-mode-option ${isDark ? 'crt-mode-active' : ''}`}>DRK</span>
          <span className="crt-mode-separator">/</span>
          <span className={`crt-mode-option ${!isDark ? 'crt-mode-active' : ''}`}>LGT</span>
        </div>
      </div>

      {/* Screen flicker on switch */}
      <div className="crt-toggle-flicker" />
    </button>
  );
};

export default ThemeToggle;
