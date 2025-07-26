import React from "react";
import "./GameRules.css"; // Optional, or create separate GameRules.css

const GameRules = ({ handleUnderstoodRules }) => {
  return (
    <div className="rules-container">
      <h2 className="sub-heading">How to Play</h2>
      <p className="description">
        Sharpen your memory and test your luck! Here's how it works:
      </p>
      <ul className="rules-list">
        <li>There are 36 hidden cards on the board (18 matching pairs).</li>
        <li>Click any two cards to flip them and reveal their numbers.</li>
        <li>If the numbers match, they stay revealed.</li>
        <li>If they don’t match, they flip back after a moment.</li>
        <li>Try to match all the pairs using the fewest attempts possible.</li>
        <li>Keep track of your score and challenge yourself!</li>
      </ul>
      <button className="understood-btn" onClick={handleUnderstoodRules}>
        I Understood
      </button>
    </div>
  );
};

export default GameRules;
