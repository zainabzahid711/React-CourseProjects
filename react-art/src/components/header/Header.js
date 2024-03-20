import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className={style.textArea}>
        <img className={style.logo} src={logo} />
        <h3 className={style.artHeading}> react art </h3>
        <p className={style.artPara}>A community of artists and art-lovers </p>
      </div>
    </>
  );
};

export default Header;
