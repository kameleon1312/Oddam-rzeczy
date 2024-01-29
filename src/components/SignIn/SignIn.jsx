import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Home/Navigation";
import Decoration from "../../assets/Decoration.svg";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Podaj poprawny adres email",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Hasło musi mieć co najmniej 6 znaków",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }

    navigate("/");
  };

  return (
    <>
      <Navigation />
      <section className="log-section">
        <div className="log-heading-block">
          <h1 className="log-heading">Zaloguj się</h1>
          <img src={Decoration} alt="decoration" />
        </div>
        <form className="log-form" onSubmit={handleLogin}>
          <div className="input-block">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="error-message">{errors.email}</p>
            )}
          </div>
          <div className="input-block">
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>
          <div className="log-btn-block">
            <button type="submit" className="log-btn">
              Zaloguj się
            </button>
            <Link to="/rejestracja" className="register-btn">
              Załóż konto
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default LogIn;