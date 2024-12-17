import { useEffect, useState } from "react";
import api from "../components/api";

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    api
      .get("/api/genres")
      .then((response) => {
        setGenres(response.data);
      })
      .catch((error) => {
        console.error("Error fetching genres", error);
      });
  }, []);

  return (
    <div>
      <h2>Genres List:</h2>
      {genres.length > 0 ? (
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre.name}</li>
          ))}
        </ul>
      ) : (
        <p>No genres available</p>
      )}
    </div>
  );
};

export default Genres;
