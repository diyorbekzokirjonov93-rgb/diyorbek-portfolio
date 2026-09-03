import { useEffect, useState } from "react";

const roles = [
  "React Developer",
  "Frontend Developer",
  "JavaScript Developer",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = deleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.slice(0, text.length + 1));

        if (text.length + 1 === currentRole.length) {
          setDeleting(true);
        }
      } else {
        setText(currentRole.slice(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-small">HELLO, I'M</p>

        <h1 className="hero-title">
          Diyorbek Zokirov
        </h1>

        <h2 className="hero-role">
          {text}
          <span className="typing-cursor">|</span>
        </h2>

        <p className="hero-description">
          I create modern, fast and user-friendly web applications
          using React and JavaScript.
        </p>

        <div className="hero-buttons">
          <a
            href="#projects"
            className="hero-btn primary"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="hero-btn secondary"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-animation">
        <div className="floating-card card-one">
          <p>React</p>
        </div>

        <div className="floating-card card-two">
          <p>JavaScript</p>
        </div>

        <div className="floating-card card-three">
          <p>Frontend</p>
        </div>

        <div className="hero-circle"></div>
      </div>
    </section>
  );
}

export default Hero;