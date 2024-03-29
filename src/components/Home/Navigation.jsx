import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from '../../utils/AuthContext';
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/wylogowanie");
  };

  return (
    <section className="nav-section">
      {user ? (
        <div className="login-container">
          <p>Zalogowano jako: {user.email}</p>
          <RouterLink to="/oddaj-rzeczy">
            <button className="give-away-button">Oddaj rzeczy</button>
          </RouterLink>
          <button className="logout-button" onClick={handleLogout}>
            Wyloguj
          </button>
        </div>
      ) : (
        <div className="login-container">
          <RouterLink to="/logowanie">
            <button className="login-button">Zaloguj</button>
          </RouterLink>
          <RouterLink to="/rejestracja">
            <button className="register-button">Załóż konto</button>
          </RouterLink>
        </div>
      )}

      <nav className="navigation-container">
        <ul className="navigation-list">
          <li className="navigation-list_element">
            <RouterLink to="/">
              Start
            </RouterLink>
          </li>

          <li className="navigation-list_element">
            <ScrollLink
              to="steps"
              spy={true}
              smooth={true}
              duration={500}
            >
              O co chodzi?
            </ScrollLink>
          </li>

          <li className="navigation-list_element">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              O nas
            </ScrollLink>
          </li>

          <li className="navigation-list_element">
            <ScrollLink
              to="whoWeHelp"
              spy={true}
              smooth={true}
              offset={15}
              duration={500}
            >
              Fundacja i organizacje
            </ScrollLink>
          </li>

          <li className="navigation-list_element">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Kontakt
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigation;