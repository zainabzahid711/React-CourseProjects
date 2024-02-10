import React from "react";
import style from "./TabButton.module.css";

function TabButton({ children, onSelect, isSelect }) {
  return (
    <li className={style.btnLists}>
      <button
        className={isSelect ? style.active : undefined}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}

export default TabButton;
