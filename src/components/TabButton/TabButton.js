import React from "react";
import style from "./TabButton.module.css";

function TabButton({ label }) {
  return (
    <li className={style.btnLists}>
      <button>{label}</button>
    </li>
  );
}

export default TabButton;
