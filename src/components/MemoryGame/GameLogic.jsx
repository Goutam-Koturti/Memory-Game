import React, { useEffect, useState } from "react";
import "./GameLogic.css";
import { getRandomNumbers } from "../../utils.js/gameUtils";

const GameLogic = ({ handleBack }) => {
  const [numbersList, setNumbersList] = useState(getRandomNumbers());
  const [openedList, setOpenedList] = useState([]);
  const [solvedNumbers, setSolvedNumbers] = useState([]);

  const handleCardClick = (e, index) => {
    if (openedList.length >= 2 || openedList.includes(index)) return;
    setOpenedList((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (openedList.length === 2) {
      const [index1, index2] = openedList;
      //both selected items are not equal
      if (numbersList[index1] === numbersList[index2]) {
        setSolvedNumbers((prev) => [...prev, numbersList[index1]]);
        setOpenedList([]);
      } else {
        //both selected items are equal
        setTimeout(() => {
          setOpenedList([]);
        }, 1000);
      }
    }
  }, [openedList]);

  const getStyles = (index, item) => {
    if (openedList.includes(index)) {
      return "revealed";
    } else if (solvedNumbers.includes(item)) {
      return "solved";
    } else return "";
  };

  const displayText = (index, item) => {
    if (openedList.includes(index)) {
      return item;
    } else if (solvedNumbers.includes(item)) {
      return "✔";
    } else return "";
  };

  const handleNewGame = () => {
    setNumbersList(getRandomNumbers());
    setSolvedNumbers([]);
  };

  return (
    <>
      {solvedNumbers.length === numbersList.length / 2 && (
        <div className="win-message">🎉 You matched all cards!</div>
      )}
      <div className="centerGrid">
        <div className="cards-grid">
          {numbersList.map((item, index) => {
            return (
              <button
                key={index}
                className={`card-item ${getStyles(index, item)}`}
                onClick={(e) => handleCardClick(e, index)}
                disabled={solvedNumbers.includes(item)}
              >
                <span>{displayText(index, item)}</span>
              </button>
            );
          })}
        </div>
      </div>
      {solvedNumbers.length === numbersList.length / 2 ? (
        <button className="new-game-btn" onClick={handleNewGame}>
          New Game
        </button>
      ) : (
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      )}
    </>
  );
};

export default GameLogic;
