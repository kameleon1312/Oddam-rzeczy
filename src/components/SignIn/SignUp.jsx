import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";


const Registration = () => {
  return (
    <>
      <Navigation />
      <section className="log-section">
        <div className="log-heading-block">
          <h1 className="log-heading">Zarejestruj się</h1>
          <img src={Decoration} alt="decoration" />
        </div>
        <form className="log-form">
          <div className="input-block">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="input-block">
            <label htmlFor="password">Hasło</label>
            <input type="password" />
          </div>
          <div className="input-block">
            <label htmlFor="password">Powtórz Hasło</label>
            <input type="password" />
          </div>
        </form>
        <div className="log-btn-block">
          <Link to="/logowanie" className="register-btn">Zaloguj się</Link>
          <button className="log-btn">Załóż konto</button>
        </div>
      </section>
    </>
  );
};

export default Registration;