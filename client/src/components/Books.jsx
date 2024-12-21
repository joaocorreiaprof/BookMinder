import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../components/api";
import "../styles/books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchParams] = useSearchParams();
  const genreId = searchParams.get("genre");
  const authorId = searchParams.get("author");

  useEffect(() => {
    let endpoint = "/api/books";

    if (genreId) {
      endpoint = `/api/books-by-genre/${genreId}`;
    }
    if (authorId) {
      endpoint = `/api/books-by-author/${authorId}`;
    }

    api
      .get(endpoint)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, [genreId, authorId]);

  return (
    <div className="books-page">
      <h2 className="page-title">
        {authorId
          ? "Books in Selected Author:"
          : genreId
          ? "Books in Selected Genre:"
          : "All Books:"}
      </h2>
      {books.length > 0 ? (
        <div className="books-container">
          {books.map((book) => (
            <div key={book.book_id} className="book-card">
              <div className="card-front">
                <h3>{book.title}</h3>
              </div>
              <div className="card-back">
                <p>
                  <strong>Publisher:</strong> {book.publisher}
                </p>
                <p>
                  <strong>Publication Year:</strong> {book.publication_year}
                </p>
                <p className="description">
                  <strong>Description:</strong> {book.description}
                </p>
                <p>
                  <strong>Language:</strong> {book.language}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No books available</p>
      )}
      <div className="navigation-links">
        {genreId && (
          <Link to="/genres" className="back-link">
            Back to genres
          </Link>
        )}
        {authorId && (
          <Link to="/authors" className="back-link">
            Back to authors
          </Link>
        )}
      </div>
    </div>
  );
};

export default Books;
