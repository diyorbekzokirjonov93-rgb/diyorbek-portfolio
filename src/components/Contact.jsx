function Contact() {
  return (
    <section id="contact">
      <div className="contact-content">
        <span>05 — CONTACT</span>

        <h2>Let's work together.</h2>

        <p>
          Have a project or an idea? Feel free to get in touch with me.
          I'm always open to new projects and opportunities.
        </p>

        <a
          href="mailto:diyorbekzokirjonov93@gmail.com"
          className="contact-main-button"
        >
          Get In Touch ↗
        </a>

        <div className="contact-cards">
          <a
            href="mailto:diyorbekzokirjonov93@gmail.com"
            className="contact-card"
          >
            <span>EMAIL</span>
            <strong>diyorbekzokirjonov93@gmail.com</strong>
          </a>

          <a
            href="https://github.com/diyorbekzokirjonov93-rgb"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>GITHUB</span>
            <strong>@diyorbekzokirjonov93-rgb</strong>
          </a>

          <a
            href="https://t.me/zokirovdiyor"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>TELEGRAM</span>
            <strong>@zokirovdiyor</strong>
          </a>

          <a
            href="https://www.instagram.com/zokirovdiyor/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span>INSTAGRAM</span>
            <strong>zokhrrv</strong>
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/diyorbekzokirjonov93-rgb"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.instagram.com/zokhrrv/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>

          <a
            href="https://t.me/zokirovdiyor"
            target="_blank"
            rel="noreferrer"
          >
            Telegram ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;