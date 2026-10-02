import { useState } from "react";
import { navLinks, profile } from "../data/portfolio.js";

function Navbar() {
  // Real interactive feature: open/close the menu on small screens
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          {profile.name}
        </a>

        <button
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav id="nav-links" className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
