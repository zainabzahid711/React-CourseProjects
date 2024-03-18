import React, { useState } from "react";
import Header from "./components/header/Header";
import UserInput from "./components/userInput/UserInput";
import Result from "./components/Results/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInputs) => {
      return {
        ...prevUserInputs,
        [inputIdentifier]: +newValue,
      };
    });
  }
  // use this + operator beacuse we perform methemtical operations in
  // investment file and javascript concatinate those nummbers using +operator
  // so by using + here can fix the bug
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputValid && <p id="center"> please enter valid data </p>}
      {inputValid && <Result input={userInput} />}
    </>
  );
}

export default App;
