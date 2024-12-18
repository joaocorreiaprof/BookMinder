import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import api from "../components/api";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchParams] = useSearchParams();
  const genreId = searchParams.get("genre");

  useEffect(() => {
    const endpoint = genreId ? `/api/books-by-genre/${genreId}` : "/api/books";

    api
      .get(endpoint)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, [genreId]);

  return (
    <div>
      <h2>{genreId ? "Books in Selected Genre:" : "All Books:"}</h2>
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
    </div>
  );
};

export default Books;
