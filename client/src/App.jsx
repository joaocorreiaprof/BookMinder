import { useEffect, useState } from "react";
import api from "./components/api";

function App() {
  const [message, setMessage] = useState("");
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState(""); // State to store the book ID to search for
  const [searchedBook, setSearchedBook] = useState(null); // State to store the book found by ID

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

  const handleSearch = () => {
    // Fetch a book by its ID
    api
      .get(`/api/books/${bookId}`) // Update the endpoint to get a specific book by ID
      .then((response) => {
        setSearchedBook(response.data); // Set the searched book to display
      })
      .catch((error) => {
        console.error("Error fetching book by ID:", error);
        setSearchedBook(null); // Clear the searched book if error occurs
      });
  };

  return (
    <div>
      <h1>Backend and frontend connected</h1>
      <p>This message came from backend: {message}</p>

      <h2>Books List:</h2>
      {books.length > 0 ? (
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>No books available</p>
      )}

      {/* Search by Book ID */}
      <div>
        <input
          type="text"
          placeholder="Enter Book ID"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)} // Update bookId state
        />
        <button onClick={handleSearch}>Search</button>

        {searchedBook ? (
          <div>
            <h3>Book Details:</h3>
            <p>{searchedBook.title}</p>
          </div>
        ) : (
          <p>No book found or error occurred.</p>
        )}
      </div>
    </div>
  );
}

export default App;
