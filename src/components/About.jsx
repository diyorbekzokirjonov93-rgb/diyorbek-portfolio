function About() {
  const technologies = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
  ];

  return (
    <section id="about" className="about-section">

      {/* SECTION TITLE */}
      <div className="section-title">
        <span>01</span>
        <h2>About Me</h2>
      </div>

      {/* INTRO */}
      <div className="about-intro">
        <div className="about-intro-label">
          <span>WHO I AM</span>
        </div>

        <div className="about-intro-content">
          <h3>
            I turn ideas into
            <span> modern web experiences.</span>
          </h3>

          <p>
            I'm Diyorbek Zokirov, a Frontend Developer focused on
            building modern, responsive and interactive web applications.
            I enjoy turning designs and ideas into clean and functional
            interfaces.
          </p>
        </div>
      </div>

      {/* ABOUT GRID */}
      <div className="about-grid">

        {/* LEFT CARD */}
        <div className="about-card about-card-large">
          <span className="about-card-number">01</span>

          <div>
            <span className="about-card-label">WHAT I DO</span>

            <h3>Frontend Development</h3>

            <p>
              I build responsive websites and web applications using
              React and JavaScript. My focus is clean code, reusable
              components and smooth user experiences.
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="about-card">
          <span className="about-card-number">02</span>

          <div>
            <span className="about-card-label">MY APPROACH</span>

            <h3>Learn. Build. Improve.</h3>

            <p>
              I learn by building real projects, solving problems and
              continuously improving my development skills.
            </p>
          </div>
        </div>

      </div>

      {/* STATS */}
      <div className="about-stats">

        <div className="about-stat">
          <strong>15+</strong>
          <span>Projects</span>
        </div>

        <div className="about-stat">
          <strong>2+</strong>
          <span>Years Learning</span>
        </div>

        <div className="about-stat">
          <strong>6+</strong>
          <span>Technologies</span>
        </div>

        <div className="about-stat">
          <strong>100%</strong>
          <span>Passion</span>
        </div>

      </div>

      {/* TECHNOLOGIES */}
      <div className="about-tech">

        <div className="about-tech-title">
          <span>TECHNOLOGIES I USE</span>
        </div>

        <div className="about-tech-list">
          {technologies.map((technology, index) => (
            <div className="about-tech-item" key={technology}>
              <span>0{index + 1}</span>
              <strong>{technology}</strong>
            </div>
          ))}
        </div>

      </div>

      {/* CURRENTLY LEARNING */}
      <div className="about-learning">

        <div>
          <span className="learning-label">
            CURRENTLY LEARNING
          </span>

          <h3>
            Always improving my
            <span> development skills.</span>
          </h3>
        </div>

        <p>
          I'm continuously exploring modern frontend technologies,
          improving my JavaScript and React knowledge, and building
          new projects to gain practical experience.
        </p>

      </div>

    </section>
  );
}

export default About;