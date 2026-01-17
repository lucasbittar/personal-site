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
    return date.toISOString().split('T')[0];
  };

  return (
    <section className="terminal-section">
      <div className="terminal-section-window">
        <div className="terminal-section-header">
          <span className="terminal-section-title">
            <span className="terminal-prompt">$</span> ls -la ~/posts/
          </span>
          <span className="terminal-section-status">
            {writing.length} files
          </span>
        </div>

        <div className="terminal-section-content">
          <div className="terminal-comment"># Recent writings and thoughts</div>

          <div className="terminal-file-list">
            <div className="terminal-file-header">
              <span>permissions</span>
              <span>date</span>
              <span>filename</span>
            </div>

            {writing.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-file-row"
                onClick={() => handlePostClick(post.url)}
              >
                <span className="terminal-permissions">-rw-r--r--</span>
                <span className="terminal-date">{formatDate(post.date)}</span>
                <span className="terminal-filename">{post.title.toLowerCase().replace(/\s+/g, '-').substring(0, 40)}.md</span>
              </a>
            ))}
          </div>

          <div className="terminal-posts-detail">
            {writing.map((post, index) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-post-card"
                onClick={() => handlePostClick(post.url)}
              >
                <div className="terminal-post-header">
                  <span className="terminal-post-index">[{String(index).padStart(2, '0')}]</span>
                  <span className="terminal-post-date">{formatDate(post.date)}</span>
                </div>
                <h3 className="terminal-post-title">{post.title}</h3>
                <p className="terminal-post-excerpt">{post.excerpt}</p>
                <span className="terminal-post-link">
                  <span className="terminal-prompt">$</span> open --url substack
                  <span className="terminal-arrow">→</span>
                </span>
              </a>
            ))}
          </div>

          <div className="terminal-cta">
            <a
              href={social.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-cta-link"
            >
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">open</span>
              <span className="terminal-flag">--all-posts</span>
              <span className="terminal-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writing;
