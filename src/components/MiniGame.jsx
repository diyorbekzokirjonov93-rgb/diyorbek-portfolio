import { useEffect, useState } from "react";

function MiniGame() {
  const [score, setScore] = useState(0);

  const [bestScore, setBestScore] = useState(
    Number(localStorage.getItem("bestScore")) || 0
  );

  const [time, setTime] = useState(30);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [newRecord, setNewRecord] = useState(false);

  const [position, setPosition] = useState({
    top: 50,
    left: 50,
  });

  // Timer
  useEffect(() => {
    if (!gameStarted || gameOver) {
      return;
    }

    if (time === 0) {
      setGameStarted(false);
      setGameOver(true);

      if (score > bestScore) {
        setBestScore(score);
        setNewRecord(true);

        localStorage.setItem("bestScore", score);
      } else {
        setNewRecord(false);
      }

      return;
    }

    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, gameStarted, gameOver, score, bestScore]);

  // Start / Restart
  const startGame = () => {
    setScore(0);
    setTime(30);
    setGameStarted(true);
    setGameOver(false);
    setNewRecord(false);

    setPosition({
      top: 50,
      left: 50,
    });
  };

  // Move dot
  const moveDot = () => {
    if (!gameStarted || gameOver) {
      return;
    }

    const newTop = Math.floor(Math.random() * 80) + 10;
    const newLeft = Math.floor(Math.random() * 80) + 10;

    setPosition({
      top: newTop,
      left: newLeft,
    });

    setScore((prev) => prev + 1);
  };

  return (
    <section id="game" className="game-section">
      <div className="section-title">
        <span>07</span>
        <h2>Mini Game</h2>
      </div>

      <div className="game-container">

        {/* GAME STATS */}
        <div className="game-stats">

          <div>
            <span>Score</span>
            <strong>{score}</strong>
          </div>

          <div>
            <span>Time</span>
            <strong>{time}s</strong>
          </div>

          <div>
            <span>Best</span>
            <strong>{bestScore}</strong>
          </div>

        </div>

        {/* GAME AREA */}
        <div className="game-area">

          {/* START SCREEN */}
          {!gameStarted && !gameOver && (
            <div className="game-message">
              <h3>🎯 Catch the Dot</h3>

              <p>
                30 soniyada imkon qadar ko‘p nuqta bosing!
              </p>

              <button onClick={startGame}>
                Start Game
              </button>
            </div>
          )}

          {/* GAME OVER */}
          {gameOver && (
            <div className="game-message">

              <h3>⏱️ Time's Up!</h3>

              <p>
                Your Score: <strong>{score}</strong>
              </p>

              {newRecord && (
                <p className="new-record">
                  🏆 NEW RECORD!
                </p>
              )}

              {!newRecord && (
                <p>
                  Best Score: <strong>{bestScore}</strong>
                </p>
              )}

              <button onClick={startGame}>
                Play Again
              </button>

            </div>
          )}

          {/* DOT */}
          {gameStarted && (
            <button
              className="game-dot"
              onClick={moveDot}
              style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
              }}
              aria-label="Catch the dot"
            ></button>
          )}

        </div>

        <p className="game-hint">
          🎯 Nuqtani imkon qadar tezroq bosing!
        </p>

      </div>
    </section>
  );
}

export default MiniGame;