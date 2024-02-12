import React from "react";
import style from "./Examples.module.css";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import { useState } from "react";
import Section from "../Section/Section";

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
    <Section title="Examples" className={style.examples}>
      <menu className={style.menubtns}>
        <TabButton
          isSelect={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelect={selectedTopic === "JSX"}
          onClick={() => handleSelect("JSX")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelect={selectedTopic === "Props"}
          onClick={() => handleSelect("Props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelect={selectedTopic === "State"}
          onClick={() => handleSelect("State")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </Section>
  );
}

export default Examples;
