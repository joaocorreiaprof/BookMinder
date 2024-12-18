import { useEffect, useState } from "react";
import api from "./api";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    api
      .get("/api/authors")
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  return (
    <div>
      <h2>Authors List:</h2>
      {authors.length > 0 ? (
        <ul>
          {authors.map((author) => (
            <li key={author.name}>{author.name}</li>
          ))}
        </ul>
      ) : (
        <p>No genres available</p>
      )}
    </div>
  );
};

export default Authors;
