
function Projects() {
  const projects = [
    {
      number: "01",
      title: "Weather App",
      description: "A weather application built with React and API.",
      technology: "React",
      link: "https://jocular-marshmallow-7f9a39.netlify.app"
    },
    {
      number: "02",
      title: "YouTube Clone",
      description: "A YouTube inspired application with video content.",
      technology: "React",
      link: "https://frolicking-licorice-52c47a.netlify.app"
    },
    {
      number: "03",
      title: "Movie App",
      description: "A modern movie application with search functionality.",
      technology: "React",
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <div className="section-title">
        <span>03</span>
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.number}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <article className="project-card">
              <span className="project-number">
                {project.number}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <strong>{project.technology}</strong>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;

