import React, { useState, useEffect, useRef, useCallback } from "react";
import GA4 from "react-ga4";
import content from "../data/content.json";

const Listening = () => {
  const { listening } = content;
  const videos = listening.videos || [listening.featuredVideo];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);

  const DISPLAY_TIME = 5000; // 5 seconds per video
  const TRANSITION_TIME = 800; // 800ms for the glitch effect

  const switchToChannel = useCallback((newIndex) => {
    if (isTransitioning || newIndex === currentIndex) return;

    setIsTransitioning(true);
    setProgress(0);

    // After transition effect, switch the video
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, TRANSITION_TIME / 2);
  }, [isTransitioning, currentIndex]);

  const nextChannel = useCallback(() => {
    const newIndex = (currentIndex + 1) % videos.length;
    switchToChannel(newIndex);
  }, [currentIndex, videos.length, switchToChannel]);

  const prevChannel = useCallback(() => {
    const newIndex = (currentIndex - 1 + videos.length) % videos.length;
    switchToChannel(newIndex);
  }, [currentIndex, videos.length, switchToChannel]);

  // Auto-advance timer
  useEffect(() => {
    if (isPaused || isTransitioning || videos.length <= 1) return;

    intervalRef.current = setInterval(() => {
      nextChannel();
    }, DISPLAY_TIME);

    return () => clearInterval(intervalRef.current);
  }, [isPaused, isTransitioning, nextChannel, videos.length]);

  // Progress bar animation
  useEffect(() => {
    if (isPaused || isTransitioning || videos.length <= 1) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / DISPLAY_TIME) * 100, 100);
      setProgress(newProgress);
    }, 50);

    return () => clearInterval(progressRef.current);
  }, [currentIndex, isPaused, isTransitioning, videos.length]);

  const handleChannelClick = () => {
    GA4.event({
      category: "Listening",
      action: "Click",
      label: "YouTube Channel",
    });
  };

  const currentVideo = videos[currentIndex];
  const channelNumber = String(currentIndex + 1).padStart(2, "0");

  return (
    <section className="terminal-section terminal-section-bg terminal-section-listening">
      <div className="terminal-section-window">
        <div className="terminal-section-header">
          <span className="terminal-section-title">
            <span className="terminal-prompt">$</span> play --video ~/media/channel_{channelNumber}.mp4
          </span>
          <span className="terminal-section-status">
            <span className={`status-dot ${isTransitioning ? 'status-dot-amber' : 'status-dot-red'}`} />
            {isTransitioning ? 'TUNING' : 'STREAMING'}
          </span>
        </div>

        <div className="terminal-section-content">
          <div className="terminal-comment"># {listening.channelDescription}</div>

          <div className="terminal-media-container">
            <div
              className="terminal-video-wrapper"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* CRT Monitor Frame */}
              <div className={`crt-monitor ${isTransitioning ? 'crt-switching' : ''}`}>
                {/* Channel indicator */}
                <div className={`crt-channel-indicator ${isTransitioning ? 'crt-channel-flash' : ''}`}>
                  CH {channelNumber}
                </div>

                {/* Static noise overlay */}
                <div className="crt-static-overlay" />

                {/* VHS tracking lines */}
                <div className="crt-tracking-lines" />

                {/* RGB Aberration layers */}
                <div className="crt-rgb-split" />

                {/* Scanlines */}
                <div className="crt-scanlines" />

                {/* The actual video */}
                <div className="crt-screen">
                  <iframe
                    src={`https://www.youtube.com/embed/${currentVideo.id}`}
                    title={currentVideo.title}
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Glitch text during transition */}
                {isTransitioning && (
                  <div className="crt-glitch-text">
                    <span data-text="NO SIGNAL">NO SIGNAL</span>
                  </div>
                )}

                {/* Screen flicker */}
                <div className="crt-flicker" />
              </div>

              {/* Progress bar */}
              {videos.length > 1 && (
                <div className="crt-progress-container">
                  <div className="crt-progress-bar">
                    <div
                      className="crt-progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="crt-progress-text">
                    {isPaused ? '[PAUSED]' : `[AUTO: ${Math.ceil((100 - progress) / 100 * 5)}s]`}
                  </div>
                </div>
              )}

              {/* Video info */}
              <div className="terminal-video-info">
                <span className="terminal-key">TITLE</span>=
                <span className="terminal-string">"{currentVideo.title}"</span>
              </div>

              {/* Channel navigation */}
              {videos.length > 1 && (
                <div className="crt-channel-nav">
                  <button
                    className="crt-nav-btn"
                    onClick={prevChannel}
                    disabled={isTransitioning}
                  >
                    <span className="terminal-prompt">$</span> prev
                  </button>

                  <div className="crt-channel-dots">
                    {videos.map((_, idx) => (
                      <button
                        key={idx}
                        className={`crt-dot ${idx === currentIndex ? 'crt-dot-active' : ''}`}
                        onClick={() => switchToChannel(idx)}
                        disabled={isTransitioning}
                        aria-label={`Switch to channel ${idx + 1}`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </button>
                    ))}
                  </div>

                  <button
                    className="crt-nav-btn"
                    onClick={nextChannel}
                    disabled={isTransitioning}
                  >
                    next <span className="terminal-prompt">$</span>
                  </button>
                </div>
              )}
            </div>

            <div className="terminal-channel-info">
              <div className="terminal-channel-card">
                <div className="terminal-channel-header">
                  <span className="terminal-youtube-icon">▶</span>
                  <span className="terminal-channel-name">{listening.channelName}</span>
                </div>
                <div className="terminal-channel-stats">
                  <div className="terminal-stat-row">
                    <span className="terminal-key">platform</span>
                    <span className="terminal-value">YouTube</span>
                  </div>
                  <div className="terminal-stat-row">
                    <span className="terminal-key">content</span>
                    <span className="terminal-value">Music Discovery</span>
                  </div>
                  <div className="terminal-stat-row">
                    <span className="terminal-key">channels</span>
                    <span className="terminal-value">{videos.length} videos</span>
                  </div>
                  <div className="terminal-stat-row">
                    <span className="terminal-key">status</span>
                    <span className="terminal-value terminal-active">● active</span>
                  </div>
                </div>
                <a
                  href={listening.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-channel-link"
                  onClick={handleChannelClick}
                >
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">open</span>
                  <span className="terminal-flag">--channel</span>
                  <span className="terminal-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listening;
