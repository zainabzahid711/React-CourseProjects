import React from "react";
import style from "./TabButton.module.css";

function TabButton({ children, isSelect, ...props }) {
  return (
    <li className={style.btnLists}>
      <button className={isSelect ? style.active : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
