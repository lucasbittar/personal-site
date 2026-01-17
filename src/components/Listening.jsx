import React from "react";
import GA4 from "react-ga4";
import content from "../data/content.json";

const Listening = () => {
  const { listening } = content;

  const handleChannelClick = () => {
    GA4.event({
      category: "Listening",
      action: "Click",
      label: "YouTube Channel",
    });
  };

  return (
    <div className="section listening-section">
      <h2>Listening</h2>
      <p className="section-intro">{listening.channelDescription}</p>
      <div className="listening-content">
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${listening.featuredVideo.id}`}
            title={listening.featuredVideo.title}
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="listening-info">
          <div className="channel-badge">
            <i className="fa-brands fa-youtube"></i>
            <span>{listening.channelName}</span>
          </div>
          <a
            href={listening.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="section-cta"
            onClick={handleChannelClick}
          >
            Visit channel <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Listening;
