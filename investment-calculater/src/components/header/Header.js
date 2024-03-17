import React from "react";
import investmentLogo from '../../assets/svg/investment-calculator-logo.png'
import style from './Header.module.css';


function Header(){
    return(
        <>
        <div className={style.textCenter}>
            <img src={investmentLogo} className={style.headerLogo}/>
            <h2>Investment Calculater</h2>
        </div>
        </>
    )
}

export default Header;