import React from "react";
import style from './Gameover.module.css'

function Gameover({winner, onRestart}){
    return(
        <>
        <div className={style.gameOverContainer}>
        <h2> Game Over! </h2>
        {winner && <p> {winner} Won! </p>}
        {!winner && <p> it's draw! </p>}
        <p> <button className={style.rematchButton} onClick={onRestart}>Rematch?</button> </p>
        </div>
        </>
    )
}

export default Gameover;