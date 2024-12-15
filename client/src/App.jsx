import { useEffect, useState } from "react";
import api from "./components/api";

function App() {
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the message from the root route
    api
      .get("/")
      .then((response) => setMessage(response.data))
      .catch((error) =>
        console.error("Error connecting to the server:", error)
      );

    // Fetch the list of books from the /api/books route
    api
      .get("/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h1>Backend and frontend connected</h1>
      <p>This message came from backend: {message}</p>

      <h2>Books List:</h2>
      {books.length > 0 ? (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author_name} -{" "}
              {book.genre_name} | ${book.price} | Stock: {book.stock}
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
}

export default App;
