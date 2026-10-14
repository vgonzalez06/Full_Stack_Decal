import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={theme === "dark" ? "navbar navbar-dark" : "navbar navbar-light"}>
      <Link to="/home" className="nav-link">
        Home
      </Link>
      <Link to="/counter" className="nav-link">
        Counter
      </Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default Navbar;
