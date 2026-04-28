import { Link } from "react-router-dom";

function Header() {
  return (
    <header  className="head">
      <nav className="nava">
        <span className="nav-item year">2026</span>

        <Link to="/" className="nav-item brand">
          IFEMS<span>XYZ</span>
        </Link>

        <Link to="/about" className="nav-item link">
          ABOUT
        </Link>
      </nav>
    </header>
  );
}

export default Header;
