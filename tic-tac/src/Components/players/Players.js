import React, { useState } from "react";
import style from "./Players.module.css";

function Players({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    // setIsEditing(isEditing ? false : true);
    setIsEditing(!isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let editablePlayerName = (
    <span className={style.playerName}>{playerName}</span>
  );
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        className={style.inputPlayer}
      />
    );
    btnCaption = "Save";
  }
  return (
    <>
      <div className={style.pDetails}>
      <li className={isActive ? style.active : undefined}>
        <span className={style.playerr}>
          {editablePlayerName}
          <span className={style.playerSymbol}>{symbol}</span>
        </span>
        <button onClick={handleClick} className={style.buttonn}>
          {/* {isEditing ? "Save" : "Edit"} */}
          {btnCaption}
        </button>
      </li>
      </div>
    </>
  );
}

export default Players;
