import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <nav>
      <h1>BookMinder</h1>

      <ul className="links-pages">
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/genres">Genres</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
      </ul>
      <ul className="header-link">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Header;
