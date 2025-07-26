import React from "react";
import "./MemoryGame.css";
import GameLogic from "./GameLogic";

const MemoryGame = ({ handleBack }) => {
  return (
    <div className="game-container">
      <h2 className="game-subheading">Let the Memory Challenge Begin!</h2>
      <p className="game-description">
        Flip two cards and find all matching pairs. Think fast and stay sharp!
      </p>
      <GameLogic handleBack={handleBack} />
    </div>
  );
};

export default MemoryGame;
