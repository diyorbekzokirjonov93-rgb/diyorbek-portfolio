function Terminal() {
  return (
    <section id="terminal" className="terminal-section">
      <div className="section-title">
        <span>06</span>
        <h2>Terminal</h2>
      </div>

      <div className="terminal-window">
        <div className="terminal-top">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
        </div>

        <div className="terminal-content">
          <p>
            <span className="terminal-symbol">$</span> whoami
          </p>
          <p className="terminal-output">
            Diyorbek Zokirov
          </p>

          <p>
            <span className="terminal-symbol">$</span> skills
          </p>
          <p className="terminal-output">
            React • JavaScript • HTML • CSS
          </p>

          <p>
            <span className="terminal-symbol">$</span> status
          </p>
          <p className="terminal-output">
            Available for projects...
          </p>

          <p className="terminal-cursor">
            <span className="terminal-symbol">$</span> _
          </p>
        </div>
      </div>
    </section>
  );
}

export default Terminal;