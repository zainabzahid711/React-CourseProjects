import React, { useState } from "react";
import style from "./AuthInput.module.css";

const AuthInput = () => {
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
  const [submit, setSubmit] = useState(false);
  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setenteredEmail(value);
    } else {
      setEnteredPass(value);
    }
  }

  function handleLogin(event) {
    event.preventDefault();
    setSubmit(true);
  }

  const emailNotValid = submit && !enteredEmail.includes("@");
  const passwordNotFound = submit && enteredPass.trim().length < 6;
  return (
    <>
      <div className={style.InputContainer}>
        <div className={style.InputField}>
          <label className={`${emailNotValid ? style.invalid : ""}`}>
            Email
          </label>
          <input
            className={emailNotValid ? style.invalid : undefined}
            type="email"
            required
            value={enteredEmail}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </div>

        <div className={style.InputField}>
          <label className={`${passwordNotFound ? style.invalid : ""}`}>
            Password
          </label>
          <input
            className={passwordNotFound ? style.invalid : undefined}
            type="password"
            required
            value={enteredPass}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </div>

        <div className={style.btnDiv}>
          <span className={style.textButton}> Create a new account </span>
          <button type="submit" className={style.button} onClick={handleLogin}>
            SIGN IN
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthInput;
