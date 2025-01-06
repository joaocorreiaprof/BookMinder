import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h2>BookMinder</h2>
        <ul className="footer-links">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <p className="footer-text">© 2025 BookMinder, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
