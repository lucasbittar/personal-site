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
    // Refresh every 30 seconds
    const interval = setInterval(fetchSpotify, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section now-section">
      <h2>Now</h2>
      <p className="section-intro">
        A living snapshot of what I'm currently focused on.
      </p>
      <div className="now-grid">
        <div className="now-item">
          <div className="now-label">
            <i className="fa-solid fa-laptop-code"></i>
            <span>Working on</span>
          </div>
          <p>{now.workingOn}</p>
        </div>
        <div className="now-item">
          <div className="now-label">
            <i className="fa-solid fa-book-open"></i>
            <span>Reading</span>
          </div>
          <div className="now-reading-list">
            {now.reading.map((book, index) => (
              <p key={index}>
                <strong>{book.title}</strong> by {book.author}
              </p>
            ))}
          </div>
        </div>
        <div className="now-item now-item-spotify">
          <div className="now-label">
            <i className="fa-brands fa-spotify"></i>
            <span>Listening to</span>
          </div>
          {spotifyLoading ? (
            <p className="spotify-loading">Loading...</p>
          ) : spotify ? (
            <a
              href={spotify.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="spotify-track"
            >
              {spotify.albumArt && (
                <img
                  src={spotify.albumArt}
                  alt={`${spotify.album} cover`}
                  className="spotify-album-art"
                />
              )}
              <div className="spotify-info">
                <span className="spotify-title">{spotify.title}</span>
                <span className="spotify-artist">{spotify.artist}</span>
                {spotify.isPlaying && (
                  <span className="spotify-status">
                    <span className="spotify-bars">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                    Now playing
                  </span>
                )}
              </div>
            </a>
          ) : (
            <p>{now.listening}</p>
          )}
        </div>
        <div className="now-item">
          <div className="now-label">
            <i className="fa-solid fa-lightbulb"></i>
            <span>Thinking about</span>
          </div>
          <p>{now.thinkingAbout}</p>
        </div>
      </div>
    </div>
  );
};

export default Now;
