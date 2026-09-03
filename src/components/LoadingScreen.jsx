import { useEffect, useState } from "react";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1>DIORBEK</h1>
        <p>Frontend Developer</p>

        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>

        <span>Loading...</span>
      </div>
    </div>
  );
}

export default LoadingScreen;