import React, { useState } from "react";
import style from "./Players.module.css";

function Players({ initialName, symbol }) {
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
      <li className={style.pDetails}>
        <span className={style.playerr}>
          {editablePlayerName}
          <span className={style.playerSymbol}>{symbol}</span>
        </span>
        <button onClick={handleClick} className={style.buttonn}>
          {/* {isEditing ? "Save" : "Edit"} */}
          {btnCaption}
        </button>
      </li>
    </>
  );
}

export default Players;
