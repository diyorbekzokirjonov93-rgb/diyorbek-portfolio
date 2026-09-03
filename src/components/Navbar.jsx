import { useState } from "react";
function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <a href="#home" onClick={closeMenu}>
          Diyorbek
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#terminal" onClick={closeMenu}>Terminal</a>

          <a
            href="https://github.com/diyorbekzokirjonov93-rgb"
            target="_blank"
            rel="noreferrer"
          >
            🔗 GitHub
          </a>

          <a
            href="https://t.me/zokirovdiyor"
            target="_blank"
            rel="noreferrer"
          >
            📱 Telegram
          </a>

          <a
            href="https://www.instagram.com/zokirovdiyor/"
            target="_blank"
            rel="noreferrer"
          >
            📸 Instagram
          </a>

          <a href="mailto:diyorbekzokirjonov93@gmail.com">
            📧 Email
          </a>
        </div>

        {/* Dark / Light Mode */}
        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <a href="#contact" className="talk-button">
          Let's Talk
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;