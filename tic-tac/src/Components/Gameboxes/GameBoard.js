import React, { useState } from "react";
import style from "./GameBoard.module.css";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevgameBoard) => {
      const updatedBoard = [
        ...prevgameBoard.map((innerArray) => [...innerArray]),
      ];
      // prevGameBoard is new array in memory which contains
      // all array elements
      prevgameBoard[rowIndex][colIndex] = "X";
      return updatedBoard;
    });
  }

  return (
    <>
      <ol className={style.GameBoard}>
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex} className={style.GameBoarditems}>
            <ol className={style.GameBoardCols}>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex} className={style.GameBoardbtns}>
                  <button
                    onClick={() => handleSelectSquare(rowIndex, colIndex)}
                    className={style.GameBoardBtn}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}

export default GameBoard;
