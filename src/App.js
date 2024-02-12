import React, { useState } from "react";
import style from "./App.module.css";
import Header from "./components/header/Header";

import Examples from "./components/Examples/Examples";
import DataDescription from "./components/DataDescription/DataDescription";

function App() {
  return (
    <div>
      <Header />
      <DataDescription />
      <Examples />
    </div>
  );
}

export default App;
