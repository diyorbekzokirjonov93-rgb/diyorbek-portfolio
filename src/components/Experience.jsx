function Experience() {
  const experiences = [
    {
      number: "01",
      category: "Frontend Development",
      title: "React Developer",
      description:
        "I develop modern and responsive web interfaces using React and JavaScript. I create personal projects, build reusable components, and continuously improve my skills in frontend development, UI design, HTML and CSS.",
      date: "2024 — Present",
    },
    {
      number: "02",
      category: "Personal Projects",
      title: "Frontend Projects",
      description:
        "I build practical web applications to improve my React, JavaScript and CSS skills. My projects focus on clean UI, responsive design and good user experience.",
      date: "2025 — Present",
    },
    {
      number: "03",
      category: "Learning",
      title: "Web Development",
      description:
        "I continuously learn new technologies, practice coding and explore modern frontend development techniques.",
      date: "2024 — Present",
    },
  ];

  return (
    <section id="experience">
      <div className="section-title">
        <span>04</span>
        <h2>Experience</h2>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience) => (
          <div className="experience-item" key={experience.number}>
            <div className="experience-line">
              <span>{experience.number}</span>
            </div>

            <div className="experience-card">
              <div className="experience-content">
                <span className="experience-category">
                  {experience.category}
                </span>

                <h3>{experience.title}</h3>

                <p>{experience.description}</p>
              </div>

              <span className="experience-date">
                {experience.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;