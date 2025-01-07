import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../components/api";
import "../styles/books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [inventory, setInventory] = useState([]);
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

    api
      .get("/api/books-inventory")
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => console.error("Error fetching inventory:", error));
  }, [genreId, authorId]);

  const getQuantity = (bookId) => {
    const bookInventory = inventory.find((item) => item.book_id === bookId);
    return bookInventory ? bookInventory.quantity : "N/A";
  };

  return (
    <div className="books-page">
      <h2 className="page-title">
        {authorId ? "Author books:" : genreId ? "Genre books:" : "All Books:"}
      </h2>
      {books.length > 0 ? (
        <div className="books-container">
          {books.map((book) => (
            <Link
              to={`/book/${book.book_id}`}
              key={book.book_id}
              className="book-card"
            >
              <div className="card-front">
                <img
                  src={book.cover_image_url}
                  alt={book.title}
                  className="book-cover-image"
                />
              </div>
              <div className="card-back">
                <p>
                  <strong>Title:</strong> {book.title}
                </p>
                <p>
                  <strong>Publisher:</strong> {book.publisher}
                </p>
                <p>
                  <strong>Publication Year:</strong> {book.publication_year}
                </p>
                <p>
                  <strong>Language:</strong> {book.language}
                </p>
                <p>
                  <strong>Description:</strong> {book.description}
                </p>
                <p>
                  <strong>Quantity:</strong> {getQuantity(book.book_id)}
                </p>
              </div>
            </Link>
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
