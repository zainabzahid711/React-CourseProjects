import React from "react";

function Log({turns}){
    return(
       
        <ol>
            {turns.map((turn) => (
            <li key={ `${turn.square.row}${turn.square.col}` }>
                {turn.player} selected {turn.square.row},{turn.square.col}
            </li>
            ))}
        </ol>
        
)
}

export default Log;