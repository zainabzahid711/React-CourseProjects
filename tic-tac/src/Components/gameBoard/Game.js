import React from "react";
import style from "./Game.module.css";
import Players from "../players/Players";

function Game() {
  return (
    <main className={style.gameBoard}>
      <div className={style.gameContainer}>
        <ol className={style.players}>
          <Players name="player1" symbol="X" />
          <Players name="player2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default Game;
