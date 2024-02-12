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
export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of a React application. A component is nothing more than a piece of UI.",
    code: "function welcome() { return <h1>Hello World!</h1>; }",
  },
  JSX: {
    title: "JSX",
    description:
      "JSX is a syntax extension for JavaScript which allows you to write HTML-like elements in your JavaScript code. It is transpiled to regular JavaScript at build time.",
    code: "const element = <h1>Hello, JSX!</h1>;",
  },
  Props: {
    title: "Props",
    description:
      "Props (short for properties) are a way of passing data from parent to child components in React. They are immutable and are used to customize components.",
    code: "function Greeting(props) { return <h1>Hello, {props.name}!</h1>; }",
  },
  State: {
    title: "State",
    description:
      "State is a data structure in React that is used to keep track of component data that may change over time. It allows components to manage their own data.",
    code: "class Counter extends React.Component { constructor(props) { super(props);",
  },
};
