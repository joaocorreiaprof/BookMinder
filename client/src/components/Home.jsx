import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>BookMinder</h1>
      <p>
        BookMinder is your ultimate inventory management solution for organizing
        and tracking books with ease. Whether you are managing a personal
        collection, a small bookstore, or a library, BookMinder helps you keep
        everything in order. Add, update, and search for books effortlessly.
        Simple, efficient, and built with book lovers in mind—BookMinder is here
        to make inventory a breeze.
      </p>
      <p>Because every book deserves its place. ✨</p>
      <ul>
        <li>
          <Link to="/books">View all books</Link>
        </li>
        <li>
          <Link to="/genres">View all genres</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
