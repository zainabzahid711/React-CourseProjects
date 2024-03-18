import React from "react";
import style from "./Header.module.css";
import mainImg from "../../assets/png/game-logo.png";

function Header() {
  return (
    <>
      <div className={style.centerDiv}>
        <img className={style.mainImage} src={mainImg} alt="main-image-logo" />
        <h1 className={style.heading}>Tic-Tac-Toe</h1>
      </div>
    </>
  );
}

export default Header;
