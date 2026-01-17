import React from "react";
import content from "../data/content.json";

const Reading = () => {
  const { reading } = content;

  const currentlyReading = reading.filter((book) => book.status === "reading");
  const favorites = reading.filter((book) => book.status === "favorite");
  const finished = reading.filter((book) => book.status === "finished");

  const getStatusSymbol = (status) => {
    switch (status) {
      case "reading":
        return "[>>]";
      case "finished":
        return "[OK]";
      case "favorite":
        return "[**]";
      default:
        return "[--]";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "reading":
        return "status-reading";
      case "finished":
        return "status-finished";
      case "favorite":
        return "status-favorite";
      default:
        return "";
    }
  };

  const BookEntry = ({ book }) => (
    <div className="terminal-book-entry">
      <div className="terminal-book-header">
        <span className={`terminal-book-status ${getStatusColor(book.status)}`}>
          {getStatusSymbol(book.status)}
        </span>
        <span className="terminal-book-title">{book.title}</span>
      </div>
      <div className="terminal-book-meta">
        <span className="terminal-key">author</span>
        <span className="terminal-value">{book.author}</span>
      </div>
      {book.thoughts && (
        <div className="terminal-book-thoughts">
          <span className="terminal-comment"># {book.thoughts}</span>
        </div>
      )}
    </div>
  );

  return (
    <section className="terminal-section terminal-section-bg terminal-section-reading">
      <div className="terminal-section-window">
        <div className="terminal-section-header">
          <span className="terminal-section-title">
            <span className="terminal-prompt">$</span> cat ~/library/reading-list.json
          </span>
          <span className="terminal-section-status">
            {reading.length} entries
          </span>
        </div>

        <div className="terminal-section-content">
          <div className="terminal-comment"># Books shaping my thinking</div>

          <div className="terminal-json-output">
            <div className="terminal-json-brace">{"{"}</div>

            {currentlyReading.length > 0 && (
              <div className="terminal-json-section">
                <div className="terminal-json-key">
                  <span className="terminal-key">"currently_reading"</span>: [
                </div>
                <div className="terminal-books-list">
                  {currentlyReading.map((book) => (
                    <BookEntry key={book.id} book={book} />
                  ))}
                </div>
                <div className="terminal-json-bracket">],</div>
              </div>
            )}

            {favorites.length > 0 && (
              <div className="terminal-json-section">
                <div className="terminal-json-key">
                  <span className="terminal-key">"favorites"</span>: [
                </div>
                <div className="terminal-books-list">
                  {favorites.map((book) => (
                    <BookEntry key={book.id} book={book} />
                  ))}
                </div>
                <div className="terminal-json-bracket">],</div>
              </div>
            )}

            {finished.length > 0 && (
              <div className="terminal-json-section">
                <div className="terminal-json-key">
                  <span className="terminal-key">"recently_finished"</span>: [
                </div>
                <div className="terminal-books-list">
                  {finished.map((book) => (
                    <BookEntry key={book.id} book={book} />
                  ))}
                </div>
                <div className="terminal-json-bracket">]</div>
              </div>
            )}

            <div className="terminal-json-brace">{"}"}</div>
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

export default Reading;
