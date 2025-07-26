import { useState } from "react";
import "./App.css";
import GameRules from "./components/MemoryGame/GameRules";
import MemoryGame from "./components/MemoryGame/MemoryGame";

function App() {
  const [stage, setStage] = useState("");

  const handleStartGame = () => {
    setStage("playNow");
  };
  const handleRulesClick = () => {
    setStage("knowRules");
  };

  const handleBack = () => {
    setStage("");
  };

  return (
    <div className="App">
      <div className="background-particles">
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 100}%`,
              animationDuration: `${Math.random() * 5 + 8}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></span>
        ))}
      </div>
      <h1 className="title">Memory Game</h1>
      {stage === "playNow" && <MemoryGame handleBack={handleBack} />}
      {stage === "knowRules" && (
        <GameRules handleUnderstoodRules={handleBack} />
      )}
      {stage === "" && (
        <>
          <button className="howToPlayBtn" onClick={handleRulesClick}>
            How to Play
          </button>
          <button className="playNowBtn" onClick={handleStartGame}>
            Play Now
          </button>
        </>
      )}
    </div>
  );
}

export default App;
