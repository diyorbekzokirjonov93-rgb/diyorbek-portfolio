function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* FOOTER TOP */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <h2>
              Diyorbek<span>.</span>
            </h2>

            <p>
              Frontend Developer creating modern,
              fast and user-friendly web experiences.
            </p>

            <div className="footer-status">
              <span className="status-dot"></span>
              <span>Available for projects</span>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="footer-column">
            <h3>Navigation</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          {/* SOCIAL */}
          <div className="footer-column">
            <h3>Social</h3>

            <a
              href="https://github.com/diyorbekzokirjonov93-rgb"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://t.me/zokirovdiyor"
              target="_blank"
              rel="noreferrer"
            >
              Telegram ↗
            </a>

            <a
              href="https://www.instagram.com/zokirovdiyor/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>

            <a href="mailto:diyorbekzokirjonov93@gmail.com">
              Email ↗
            </a>
          </div>

          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>Let's talk</h3>

            <a
              href="mailto:diyorbekzokirjonov93@gmail.com"
              className="footer-email"
            >
              diyorbekzokirjonov93@gmail.com
            </a>

            <p>
              Have an idea?
              <br />
              Let's build something great.
            </p>
          </div>
        </div>

        {/* BIG TEXT */}
        <div className="footer-big-text">
          <span>DIYORBEK</span>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {currentYear} Diyorbek Zokirov. All rights reserved.
          </p>

          <p>
            Built with <strong>React</strong> &{" "}
            <strong>JavaScript</strong>
          </p>

          <a
            href="#home"
            className="footer-top-button"
            aria-label="Back to top"
          >
            ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;