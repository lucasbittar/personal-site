import React from "react";
import GA4 from "react-ga4";
import content from "../data/content.json";

const Writing = () => {
  const { writing, social } = content;

  const handlePostClick = (url) => {
    GA4.event({
      category: "Writing",
      action: "Click",
      label: `URL: ${url}`,
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="section writing-section">
      <h2>Writing</h2>
      <p className="section-intro">
        Thoughts on technology, life, and everything in between.
      </p>
      <div className="writing-grid">
        {writing.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="writing-card"
            onClick={() => handlePostClick(post.url)}
          >
            <span className="writing-date">{formatDate(post.date)}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span className="writing-link">
              Read on Substack <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
        ))}
      </div>
      <a
        href={social.substack}
        target="_blank"
        rel="noopener noreferrer"
        className="section-cta"
      >
        View all posts <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  );
};

export default Writing;
