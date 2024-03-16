import React, { useState } from "react";
import style from "./GameBoard.module.css";


function GameBoard({onSelectSquare, board}) {

 
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevgameBoard) => {
  //     const updatedBoard = [
  //       ...prevgameBoard.map(innerArray => [...innerArray]),
  //     ];
  //     // updatedBoard is new array in memory which contains
  //     // all array elements
  //     // updated the state in immuttable way
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare( );
  // }
  return (
    <>
      <ol className={style.GameBoard}>
        {board.map((row, rowIndex) => (
          <li key={rowIndex} className={style.GameBoarditems}>
            <ol className={style.GameBoardCols}>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex} className={style.GameBoardbtns}>
                  <button
                    className={style.GameBoardBtn}
                    onClick={() => onSelectSquare(rowIndex, colIndex) }
                    // () => handleSelectSquare(rowIndex, colIndex) ananynmous
                    // function so that we have all control that how handle select
                    // is called when its called
                    disabled={playerSymbol!==null}
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
