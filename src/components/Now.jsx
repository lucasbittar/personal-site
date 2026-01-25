import React, { useState, useEffect } from "react";
import content from "../data/content.json";

const Now = () => {
  const { now } = content;
  const [spotify, setSpotify] = useState(null);
  const [spotifyLoading, setSpotifyLoading] = useState(true);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const response = await fetch("/api/spotify");
        if (response.ok) {
          const data = await response.json();
          if (data.title) {
            setSpotify(data);
          }
        }
      } catch (error) {
        console.log("Spotify not configured or unavailable");
      } finally {
        setSpotifyLoading(false);
      }
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="terminal-section">
      <div className="terminal-section-window">
        <div className="terminal-section-header">
          <span className="terminal-section-title">
            <span className="terminal-prompt">$</span> cat ~/now.log
          </span>
          <span className="terminal-section-status">
            <span className="status-dot status-dot-green" /> LIVE
          </span>
        </div>

        <div className="terminal-section-content">
          <div className="terminal-comment"># Current status snapshot</div>
          <div className="terminal-comment"># Last updated: {new Date().toLocaleDateString()}</div>

          <div className="terminal-output-block">
            <div className="terminal-var">
              <span className="terminal-key">WORKING_ON</span>=[
            </div>
            {Array.isArray(now.workingOn) ? (
              now.workingOn.map((item, index) => (
                <div key={index} className="terminal-array-item">
                  <span className="terminal-string">"{item}"</span>
                  {index < now.workingOn.length - 1 && ","}
                </div>
              ))
            ) : (
              <div className="terminal-array-item">
                <span className="terminal-string">"{now.workingOn}"</span>
              </div>
            )}
            <div className="terminal-var">]</div>
          </div>

          <div className="terminal-output-block">
            <div className="terminal-var">
              <span className="terminal-key">READING</span>=[
            </div>
            {now.reading.map((book, index) => (
              <div key={index} className="terminal-array-item">
                <span className="terminal-string">"{book.title}"</span>
                <span className="terminal-secondary"> by {book.author}</span>
                {index < now.reading.length - 1 && ","}
              </div>
            ))}
            <div className="terminal-var">]</div>
          </div>

          <div className="terminal-output-block">
            <div className="terminal-var">
              <span className="terminal-key">LISTENING</span>=
            </div>
            {spotifyLoading ? (
              <div className="terminal-loading">
                <span className="loading-spinner" /> Fetching from Spotify API...
              </div>
            ) : spotify ? (
              <a
                href={spotify.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-spotify-link"
              >
                <div className="terminal-spotify-track">
                  {spotify.albumArt && (
                    <img
                      src={spotify.albumArt}
                      alt={`${spotify.album} cover`}
                      className="terminal-album-art"
                    />
                  )}
                  <div className="terminal-track-info">
                    <span className="terminal-track-title">{spotify.title}</span>
                    <span className="terminal-track-artist">{spotify.artist}</span>
                    {spotify.isPlaying && (
                      <span className="terminal-now-playing">
                        <span className="terminal-bars">
                          <span /><span /><span />
                        </span>
                        NOW_PLAYING
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ) : (
              <span className="terminal-string">"{now.listening}"</span>
            )}
          </div>

          <div className="terminal-output-block">
            <div className="terminal-var">
              <span className="terminal-key">THINKING_ABOUT</span>=
              <span className="terminal-string">"{now.thinkingAbout}"</span>
            </div>
          </div>

          <div className="terminal-prompt-line">
            <span className="terminal-prompt">$</span>
            <span className="terminal-cursor">█</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Now;
