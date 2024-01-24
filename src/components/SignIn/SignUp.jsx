import React from "react";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";


const Registration = () =>{
    return(
        <>
        <Navigation/>
        <section className="log-section">
        <div className="log-heading-block">
          <h1 className="log-heading">Zarejestruj się</h1>
          <img src={Decoration} alt="decoration" />
        </div>
        <form className="log-form">
          <div className="input-block">
            <label>Email</label>
            <input type="text"/>
            </div>
            <div className="input-block">
            <label htmlFor="password">Hasło</label>
            <input type="password"/>
            </div>
            <div className="input-block">
            <label htmlFor="password">powtórz Hasło</label>
            <input type="password"/>
            </div>
        </form>
        <div className="log-btn-block">
            <button className="register-btn">Zaloguj się</button>
            <button className="log-btn">Załóż konto</button>
        </div>

        </section>
        </>
    )
}

export default Registration;