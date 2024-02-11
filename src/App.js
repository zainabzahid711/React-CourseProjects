import React, { useState } from "react";
import style from "./App.module.css";
import Header from "./components/header/Header";

import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import Examples from "./components/Examples/Examples";

function App() {
  return (
    <div>
      <Header />
      <CoreConcepts />
      <Examples />
    </div>
  );
}

export default App;
