import React from "react";
import style from "./Game.module.css";
import Players from "../players/Players";
import GameBoard from "../Gameboxes/GameBoard";

function Game() {
  return (
    <main className={style.gameBoard}>
      <div className={style.gameContainer}>
        <ol className={style.players}>
          <Players initialName="player1" symbol="X" />
          <Players initialName="player2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default Game;
