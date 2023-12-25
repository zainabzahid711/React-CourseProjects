import React from "react";
import componentImg from "./assets/png/components.png";
import propImg from "./assets/png/config.png";
import jsxImg from "./assets/png/jsx-ui.png";
import stateImg from "./assets/png/state-mgmt.png";

export const dataDescription = [
  {
    img: componentImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components",
  },
  {
    img: jsxImg,
    title: "Jsx",
    description:
      "Return (potentially dynamic) HTML (ish) code to define the actual markup that will be rendered",
  },
  {
    img: stateImg,
    title: "Configuration",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them",
  },
  {
    img: propImg,
    title: "Props",
    description:
      "React-mananged data which, when changed courses the component to re-render & the UI to update",
  },
];
