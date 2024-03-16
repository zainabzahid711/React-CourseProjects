import React, { useState } from "react";
import style from "./Game.module.css";
import Players from "../players/Players";
import GameBoard from "../Gameboxes/GameBoard";
import Log from "../logComponent/Log";
import { WINNING_COMBINATIONS } from "../Combinations/Winnig-comb";
import Gameover from "../GameOver/Gameover";


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//helper fnction
function derivedActivePlayer(gameTurns){
  let currentPlayer = 'X';

  if( gameTurns.length >0 && gameTurns[0].player==='X'){
    currentPlayer='O';
  }

  return currentPlayer;
}

function Game() {
  const [gameTurns, setGameTurns] = useState([])
  // const [hasWinner, setHasWinner] = useState(false)
  //const [activePlayer, setActivePlayer] = useState('X')

  const activePlayer = derivedActivePlayer(gameTurns)

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for(const turn of gameTurns){
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  let winner = null;


  for(const combinations of WINNING_COMBINATIONS){
    const firstSquare = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquare = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquare = gameBoard[combinations[2].row][combinations[2].column];

    if(firstSquare && firstSquare == secondSquare && firstSquare == thirdSquare){
      winner = firstSquare;
    }
  }
  const hasDraw = gameTurns.length === 9 && !winner;
  function handleSelectSquare(rowIndex, colIndex){
    //setActivePlayer((curActivePlayer)=> curActivePlayer=== 'X'? 'O':'X');
    setGameTurns ((prevTurns)=>{

      const currentPlayer = derivedActivePlayer(prevTurns);
 
      const updatedTurns =[
        {square: {row: rowIndex, col: colIndex}, player:currentPlayer},
        ...prevTurns,
      ]
      return updatedTurns;
    })
  }
  
  
  function handleRestart(){
    setGameTurns([]);
  }

  return (
    <main className={style.gameBoard}>
      <div className={style.gameContainer}>
        <ol id="palyer" className={style.players}>
          <Players initialName="player1" symbol="X"  isActive={activePlayer==='X'}/>
          <Players initialName="player2" symbol="O"  isActive={activePlayer==='O'} />
        </ol>
        {(winner || hasDraw) && <Gameover winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default Game;
