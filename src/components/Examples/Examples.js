import React from "react";
import style from "./Examples.module.css";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import { useState } from "react";

function Examples() {
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
      <section className={style.examples}>
        <h2>Examples</h2>
        <menu className={style.menubtns}>
          <TabButton
            isSelect={selectedTopic === "components"}
            onSelect={() => handleSelect("components")}
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

export default Examples;
