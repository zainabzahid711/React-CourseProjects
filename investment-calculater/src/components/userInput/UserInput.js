import React, { useState } from "react";
import style from './UserInput.module.css';

function UserInput(){

    
const[userInput, setUserInput]=useState({
    initialInvestment: 10000,
    annualInvestment: 1200, 
    expectedReturn: 6, 
    duration: 10,
});
function handleChange(inputIdentifier, newValue ){
    setUserInput(prevUserInputs=>{
        return{
            ...prevUserInputs,
            [inputIdentifier]: newValue
        }
    })
}
    
   return(
    <>
    <div className={style.Container}>
    <div className={style.INputContainer}>
        <p className={style.eachContainer}>
           <label>Initial Investment</label>
           <input type="number" 
           required 
           value={userInput.initialInvestment} 
           onChange={(event)=>handleChange('initialInvestment', event.target.value)} 
           />
        </p>
        <p  className={style.eachContainer}>
           <label>Annual Investment</label>
           <input type="number" 
           required
           value={userInput.annualInvestment} 
           onChange={(event)=>handleChange('annualInvestment', event.target.value)}
           />
        </p>
    </div>
    <div className={style.INputContainer}>
        <p  className={style.eachContainer}>
           <label>Epexcted Return</label>
           <input type="number"
           required
           value={userInput.expectedReturn} 
           onChange={(event)=>handleChange('expectedReturn', event.target.value)}
           />
        </p>
        <p className={style.eachContainer}>
           <label>Duration</label>
           <input type="number"
           required
           value={userInput.duration} 
           onChange={(event)=>handleChange('duration', event.target.value)}
           />
        </p>
    </div>
    </div>
    </>
   )
}

export default UserInput;