import React from "react";
import styles from "./Header.module.css";
import reactLogo from "../../assets/png/react-core-concepts.png";

const randomTexts = ["crucial ", "basic ", "fundamentals"];
function getRandomValue(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  // const description = randomTexts[getRandomValue(2)];
  return (
    <header className={styles.header}>
      <img className={styles.reactLogo} src={reactLogo} alt="reactLogo" />
      <h1 className={styles.heading}>React Essentials</h1>
      <p className={styles.paragragh}>
        {randomTexts[getRandomValue(2)]} React concepts you will need for any{" "}
        <br></br>
        app you are going to build
      </p>
    </header>
    // <div>header</div>
  );
}

export default Header;
