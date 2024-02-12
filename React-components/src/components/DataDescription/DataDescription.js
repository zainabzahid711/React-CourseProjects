import React from "react";
import { dataDescription } from "../../data";
import style from "./DataDescription.module.css";
import CoreConcepts from "../CoreConcepts/CoreConcepts";

function DataDescription() {
  return (
    <section className={style.coreConcepts}>
      <h1> Core Concepts </h1>
      <ul className={style.coreComponents}>
        {dataDescription.map((coreItem) => (
          <CoreConcepts key={coreItem.title} {...coreItem} />
        ))}
      </ul>
    </section>
  );
}

export default DataDescription;
