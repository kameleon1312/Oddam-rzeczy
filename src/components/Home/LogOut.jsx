import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";

const Logout = () => {
  return (
    <>
      <Navigation />
      <div className="logout-section">
        <h1 className="logout-heading-bloc">Wylogowanie nastąpiło pomyślnie!</h1>
        <div className="decoration-logo">
          <img src={Decoration} alt="Decoration" className="decoration-logo" />
        </div>
        <Link to="/" className="home-btn">
          Strona główna
        </Link>
      </div>
    </>
  );
};

export default Logout;