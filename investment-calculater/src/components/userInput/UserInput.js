import React from "react";
import style from './UserInput.module.css';

function UserInput({onChange, userInput}){
    
   return(
    <>
    <div className={style.Container}>
    <div className={style.INputContainer}>
        <p className={style.eachContainer}>
           <label>Initial Investment</label>
           <input type="number" 
           required 
           value={userInput.initialInvestment} 
           onChange={(event)=>onChange('initialInvestment', event.target.value)} 
           />
        </p>
        <p  className={style.eachContainer}>
           <label>Annual Investment</label>
           <input type="number" 
           required
           value={userInput.annualInvestment} 
           onChange={(event)=>onChange('annualInvestment', event.target.value)}
           />
        </p>
    </div>
    <div className={style.INputContainer}>
        <p  className={style.eachContainer}>
           <label>Epexcted Return</label>
           <input type="number"
           required
           value={userInput.expectedReturn} 
           onChange={(event)=>onChange('expectedReturn', event.target.value)}
           />
        </p>
        <p className={style.eachContainer}>
           <label>Duration</label>
           <input type="number"
           required
           value={userInput.duration} 
           onChange={(event)=>onChange('duration', event.target.value)}
           />
        </p>
    </div>
    </div>
    </>
   )
}

export default UserInput;