import React, { useState } from "react";
import style from "./Game.module.css";
import Players from "../players/Players";
import GameBoard from "../Gameboxes/GameBoard";
import Log from "../logComponent/Log";
import { WINNING_COMBINATIONS } from "../Combinations/Winnig-comb";
import Gameover from "../GameOver/Gameover";

const PLAYERS={
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
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

function deriveGameBoard(gameTurns){
  
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for(const turn of gameTurns){
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players){
  let winner = null;


  for(const combinations of WINNING_COMBINATIONS){
    const firstSquare = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquare = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquare = gameBoard[combinations[2].row][combinations[2].column];

    if(firstSquare && firstSquare == secondSquare && firstSquare == thirdSquare){
      winner = players[firstSquare];
    }
  }
  return winner;
}

function Game() {
  const [players, setPlayers] = useState(PLAYERS); 



  const [gameTurns, setGameTurns] = useState([])
  // const [hasWinner, setHasWinner] = useState(false)
  //const [activePlayer, setActivePlayer] = useState('X')

  const activePlayer = derivedActivePlayer(gameTurns)

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);


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

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers=>{
      return {
        ...prevPlayers,
        [symbol]:newName
    }
    });
  }
  return (
    <main className={style.gameBoard}>
      <div className={style.gameContainer}>
        <ol id="palyer" className={style.players}>
          <Players initialName={PLAYERS.X} symbol="X"  isActive={activePlayer==='X'} onChange={handlePlayerNameChange}/>
          <Players initialName={PLAYERS.O} symbol="O"  isActive={activePlayer==='O'} onChange={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <Gameover winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default Game;
