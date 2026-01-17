import React, { useState, useEffect } from "react";
import content from "../data/content.json";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { hero } = content;
  const words = hero?.rotatingWords || ["software engineer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [bootSequence, setBootSequence] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // Boot sequence animation
  useEffect(() => {
    const bootSteps = [1, 2, 3, 4, 5];
    let currentStep = 0;

    const bootInterval = setInterval(() => {
      if (currentStep < bootSteps.length) {
        setBootSequence(bootSteps[currentStep]);
        currentStep++;
      } else {
        clearInterval(bootInterval);
        setShowContent(true);
      }
    }, 400);

    return () => clearInterval(bootInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!showContent) return;

    const currentWord = words[currentWordIndex];
    const typeSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 300 : 2500;

    if (!isDeleting && displayText === currentWord) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words, showContent]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="terminal-hero">
      <ThemeToggle />

      <div className="terminal-container">
        {/* Terminal window */}
        <div className="terminal-window">
          {/* Terminal header bar */}
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-btn terminal-btn-close" />
              <span className="terminal-btn terminal-btn-minimize" />
              <span className="terminal-btn terminal-btn-maximize" />
            </div>
            <div className="terminal-title">lucas@portfolio:~</div>
            <div className="terminal-time">{currentTime}</div>
          </div>

          {/* Terminal content */}
          <div className="terminal-content">
            {/* Boot sequence */}
            <div className={`terminal-boot ${showContent ? "boot-complete" : ""}`}>
              <p className={bootSequence >= 1 ? "visible" : ""}>
                <span className="terminal-prompt">&gt;</span> Initializing system...
              </p>
              <p className={bootSequence >= 2 ? "visible" : ""}>
                <span className="terminal-prompt">&gt;</span> Loading profile data...
                <span className="terminal-ok">[OK]</span>
              </p>
              <p className={bootSequence >= 3 ? "visible" : ""}>
                <span className="terminal-prompt">&gt;</span> Establishing connection...
                <span className="terminal-ok">[OK]</span>
              </p>
              <p className={bootSequence >= 4 ? "visible" : ""}>
                <span className="terminal-prompt">&gt;</span> Rendering interface...
                <span className="terminal-ok">[OK]</span>
              </p>
              <p className={bootSequence >= 5 ? "visible" : ""}>
                <span className="terminal-prompt">&gt;</span> Welcome.
              </p>
            </div>

            {/* Main content */}
            {showContent && (
              <div className="terminal-main">
                <div className="terminal-divider">
                  {"═".repeat(50)}
                </div>

                {/* ASCII art name */}
                <pre className="terminal-ascii" aria-label="Lucas Bittar">
{`
 ██╗     ██╗   ██╗ ██████╗ █████╗ ███████╗
 ██║     ██║   ██║██╔════╝██╔══██╗██╔════╝
 ██║     ██║   ██║██║     ███████║███████╗
 ██║     ██║   ██║██║     ██╔══██║╚════██║
 ███████╗╚██████╔╝╚██████╗██║  ██║███████║
 ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝
 ██████╗ ██╗████████╗████████╗ █████╗ ██████╗
 ██╔══██╗██║╚══██╔══╝╚══██╔══╝██╔══██╗██╔══██╗
 ██████╔╝██║   ██║      ██║   ███████║██████╔╝
 ██╔══██╗██║   ██║      ██║   ██╔══██║██╔══██╗
 ██████╔╝██║   ██║      ██║   ██║  ██║██║  ██║
 ╚═════╝ ╚═╝   ╚═╝      ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
`}
                </pre>

                <div className="terminal-divider">
                  {"═".repeat(50)}
                </div>

                {/* Role/typing section */}
                <div className="terminal-role">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">whoami</span>
                </div>
                <div className="terminal-output">
                  <span className="terminal-label">role:</span>
                  <span className="terminal-value terminal-typing">
                    {displayText}
                    <span className="terminal-cursor">█</span>
                  </span>
                </div>

                {/* Stats section */}
                <div className="terminal-stats">
                  <div className="terminal-stat">
                    <span className="terminal-prompt">$</span>
                    <span className="terminal-command">cat stats.txt</span>
                  </div>
                  <div className="terminal-stat-grid">
                    <div className="terminal-stat-item">
                      <span className="terminal-stat-key">location</span>
                      <span className="terminal-stat-value">Brazil</span>
                    </div>
                    <div className="terminal-stat-item">
                      <span className="terminal-stat-key">experience</span>
                      <span className="terminal-stat-value">15+ years</span>
                    </div>
                    <div className="terminal-stat-item">
                      <span className="terminal-stat-key">focus</span>
                      <span className="terminal-stat-value">Software Engineering</span>
                    </div>
                    <div className="terminal-stat-item">
                      <span className="terminal-stat-key">status</span>
                      <span className="terminal-stat-value terminal-online">● online</span>
                    </div>
                  </div>
                </div>

                {/* Scroll prompt */}
                <div className="terminal-scroll-prompt" onClick={scrollToContent}>
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">scroll --down</span>
                  <span className="terminal-hint">[press to continue]</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Side decorations */}
        <div className="terminal-side-info">
          <div className="terminal-side-item">
            <span>SYS</span>
            <span className="terminal-bar">
              <span className="terminal-bar-fill" style={{ width: "78%" }} />
            </span>
            <span>78%</span>
          </div>
          <div className="terminal-side-item">
            <span>MEM</span>
            <span className="terminal-bar">
              <span className="terminal-bar-fill" style={{ width: "45%" }} />
            </span>
            <span>45%</span>
          </div>
          <div className="terminal-side-item">
            <span>NET</span>
            <span className="terminal-bar">
              <span className="terminal-bar-fill terminal-bar-accent" style={{ width: "92%" }} />
            </span>
            <span>92%</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
