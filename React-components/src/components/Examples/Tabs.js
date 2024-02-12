import React from "react";
import style from "./Examples.module.css";

function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //const ButtonContainer = buttonsContainer;
  return (
    <>
      <buttonsContainer className={style.menubtns}>{buttons}</buttonsContainer>
      {children}
    </>
  );
}

export default Tabs;
