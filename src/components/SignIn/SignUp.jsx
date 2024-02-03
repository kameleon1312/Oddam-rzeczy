import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navigation from "../Home/Navigation";
import { supabase } from "../../utils/supabase";
import { useAuth } from '../../utils/AuthContext';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const handleRegistration = async (e) => {
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

    if (password !== password2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password2: "Hasła nie są identyczne",
      }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password2: "" }));
    }

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert("Rejestracja nieudana: " + error.message);
      } else {
        login({ email });

        const { data, error } = await supabase
          .from("users")
          .upsert([{ email, password }], { onConflict: ['email'] });

        if (error) {
          console.error("Błąd podczas zapisywania danych użytkownika:", error.message);
        } else {
          alert("Rejestracja udana!");
          navigate("/");
        }
      }
    } catch (error) {
      console.error("Błąd podczas rejestracji:", error.message);
    }
  };

  return (
    <>
      <Navigation />
      <section className="log-section">
        <div className="log-heading-block">
          <h1 className="log-heading">Zarejestruj się</h1>
        </div>
        <form className="log-form" onSubmit={handleRegistration}>
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
          <div className="input-block">
            <label htmlFor="password2">Powtórz Hasło</label>
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            {errors.password2 && (
              <p className="error-message">{errors.password2}</p>
            )}
          </div>
          <div className="log-btn-block">
            <button type="submit" className="register-btn">
              Załóż konto
            </button>
            <Link to="/logowanie" className="log-btn">
              Zaloguj się
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Registration;