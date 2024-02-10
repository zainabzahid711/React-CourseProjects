import React, { useState } from "react";
import style from "./App.module.css";
import Header from "./components/header/Header";
import { dataDescription } from "./data";
import { EXAMPLES } from "./data";

import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectButton) {
    setSelectedTopic(selectButton);
  }

  let tabContent = <p> select a topic </p>;

  if (selectedTopic) {
    tabContent = (
      <div className={style.tabContent}>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p> {EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code> {EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
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
      <section className={style.examples}>
        <h2>Examples</h2>
        <menu className={style.menubtns}>
          <TabButton
            isSelect={selectedTopic === "components"}
            onSelect={() => handleSelect("componenets")}
          >
            Components
          </TabButton>
          <TabButton
            isSelect={selectedTopic === "JSX"}
            onSelect={() => handleSelect("JSX")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelect={selectedTopic === "Props"}
            onSelect={() => handleSelect("Props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelect={selectedTopic === "State"}
            onSelect={() => handleSelect("State")}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </section>
    </div>
  );
}

export default App;
