import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../components/api";

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
    <div>
      <h2>
        {authorId
          ? "Books in Selected Author:"
          : genreId
          ? "Books in Selected Genre:"
          : "All Books:"}
      </h2>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.book_id}>
              <h3>{book.title}</h3>
              <p>
                <strong>Publisher:</strong> {book.publisher}
              </p>
              <p>
                <strong>Publication Year:</strong> {book.publication_year}
              </p>
              <p>
                <strong>Description:</strong> {book.description}
              </p>
              <p>
                <strong>Language:</strong> {book.language}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available</p>
      )}
      {genreId && <Link to="/genres">Back to genres</Link>}
      {authorId && <Link to="/authors">Back to authors</Link>}
    </div>
  );
};

export default Books;
