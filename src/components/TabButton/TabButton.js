import React from "react";
import style from "./TabButton.module.css";

function TabButton({ children, onSelect }) {
  function handleClick() {
    console.log("helo react");
  }

  return (
    <li className={style.btnLists}>
      <button className={style.tabButton} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
