import React from "react";
import ReactDOM from "react-dom/client";
import style from "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <main className={style.backgroundContainer}>
      <App />
    </main>
  </React.StrictMode>
);
