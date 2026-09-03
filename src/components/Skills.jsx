function Skills() {
  const skills = [
    {
      name: "React",
      percent: 85,
    },
    {
      name: "JavaScript",
      percent: 75,
    },
    {
      name: "HTML",
      percent: 90,
    },
    {
      name: "CSS",
      percent: 80,
    },
    {
      name: "Git / GitHub",
      percent: 70,
    },
  ];

  return (
    <section id="skills">
      <div className="section-title">
        <span>02</span>
        <h2>My Skills</h2>
      </div>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;