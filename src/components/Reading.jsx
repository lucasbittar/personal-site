import React from "react";
import content from "../data/content.json";

const Reading = () => {
  const { reading } = content;

  const currentlyReading = reading.filter((book) => book.status === "reading");
  const favorites = reading.filter((book) => book.status === "favorite");
  const finished = reading.filter((book) => book.status === "finished");

  const getStatusIcon = (status) => {
    switch (status) {
      case "reading":
        return "fa-book-open";
      case "finished":
        return "fa-check";
      case "favorite":
        return "fa-heart";
      default:
        return "fa-book";
    }
  };

  const BookCard = ({ book }) => (
    <div className="book-card">
      <div className="book-status">
        <i className={`fa-solid ${getStatusIcon(book.status)}`}></i>
      </div>
      <div className="book-info">
        <h4>{book.title}</h4>
        <span className="book-author">by {book.author}</span>
        {book.thoughts && <p className="book-thoughts">{book.thoughts}</p>}
      </div>
    </div>
  );

  return (
    <div className="section reading-section">
      <h2>Reading</h2>
      <p className="section-intro">
        Books that are shaping my thinking or have left a mark.
      </p>
      <div className="reading-content">
        {currentlyReading.length > 0 && (
          <div className="reading-group">
            <h3>
              <i className="fa-solid fa-book-open"></i> Currently Reading
            </h3>
            <div className="books-list">
              {currentlyReading.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        )}
        {favorites.length > 0 && (
          <div className="reading-group">
            <h3>
              <i className="fa-solid fa-heart"></i> Favorites
            </h3>
            <div className="books-list">
              {favorites.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        )}
        {finished.length > 0 && (
          <div className="reading-group">
            <h3>
              <i className="fa-solid fa-check"></i> Recently Finished
            </h3>
            <div className="books-list">
              {finished.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reading;
