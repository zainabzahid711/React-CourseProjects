import React, { useState } from "react";
import style from "./Players.module.css";

function Players({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    setIsEditing(true);
  }
  let playerName = <span className={style.playerName}>{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required className={style.inputPlayer} />;
  }
  return (
    <>
      <li className={style.pDetails}>
        <span className={style.playerr}>
          {playerName}
          <span className={style.playerSymbol}>{symbol}</span>
        </span>
        <button onClick={handleClick} className={style.buttonn}>
          Edit
        </button>
      </li>
    </>
  );
}

export default Players;
