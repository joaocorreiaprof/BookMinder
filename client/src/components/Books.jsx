import { useEffect, useState } from "react";
import api from "../components/api";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api
      .get("/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Books;
