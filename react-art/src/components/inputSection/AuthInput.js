import React, { useState } from "react";
import { styled } from "styled-components";
import CustomInput from "../input/Input";

// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   text-align: center;
//   gap: 20px;
//   margin-bottom: 20px;
// `;

const Button = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;
  & :hover {
    background-color: #f0920e;
  }
`;

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
      <div className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
        <div className="flex flex-col gap-2 mb-6">
          <CustomInput
            label="Email"
            invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mb-6">
          <CustomInput
            label="Password"
            invalid={passwordNotFound}
            type="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </div>

        <div className="flex justify-end gap-4">
          <span className="text-amber-300 hover:text-amber-500 cursor-pointer">
            Create a new account
          </span>
          <Button type="submit" onClick={handleLogin}>
            SIGN IN
          </Button>
        </div>
      </div>
    </>
  );
};

export default AuthInput;
