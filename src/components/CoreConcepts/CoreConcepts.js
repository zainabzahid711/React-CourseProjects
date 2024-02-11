import React from "react";
import style from "./CoreConcepts.module.css";
import { dataDescription } from "../../data";

function CoreConcepts({ img, title, description }) {
  return (
    <>
      <li>
        <img className={style.componentImage} src={img} alt="react-concept" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
      <section className={style.coreConcepts}>
        <h1> Core Concepts </h1>
        <ul className={style.coreComponents}>
          {dataDescription.map((coreItem) => (
            <CoreConcepts key={coreItem.title} {...coreItem} />
          ))}
          {/* <CoreConcepts
        img={dataDescription[0].img}
        title={dataDescription[0].title}
        description={dataDescription[0].description}
        // {...dataDescription[0]}
      />
      <CoreConcepts {...dataDescription[1]} />
      <CoreConcepts {...dataDescription[2]} />
      <CoreConcepts {...dataDescription[3]} /> */}
        </ul>
      </section>
    </>
  );
}

export default CoreConcepts;
