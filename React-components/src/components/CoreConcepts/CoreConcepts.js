import React from "react";
import style from "./CoreConcepts.module.css";

function CoreConcepts({ img, title, description }) {
  return (
    <li>
      <img className={style.componentImage} src={img} alt="react-concept" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcepts;
