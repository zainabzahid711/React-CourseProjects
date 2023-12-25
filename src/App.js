import React from "react";
import style from "./App.module.css";
import Header from "./components/header/Header";
import { dataDescription } from "./data";

import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton/TabButton";

function App() {
  return (
    <div>
      <Header />
      <section className={style.coreConcepts}>
        <h1> Core Concepts </h1>
        <ul className={style.coreComponents}>
          <CoreConcepts
            img={dataDescription[0].img}
            title={dataDescription[0].title}
            description={dataDescription[0].description}
            // {...dataDescription[0]}
          />
          <CoreConcepts {...dataDescription[1]} />
          <CoreConcepts {...dataDescription[2]} />
          <CoreConcepts {...dataDescription[3]} />
        </ul>
      </section>
      <section className={style.examples}>
        <h2>Examples</h2>
        <menu>
          <TabButton label="components" />
        </menu>
      </section>
    </div>
  );
}

export default App;
