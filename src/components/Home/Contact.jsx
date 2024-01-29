import React, { useState } from "react";
import BackgroundContact from "../../assets/Background-Contact-Form.jpg";
import Decoration from "../../assets/Decoration.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.message.length < 120) {
        setErrors({
          message: "Wiadomość powinna mieć co najmniej 120 znaków.",
        });
        return;
      }

      setErrors({});

      const response = await fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 200 && data.status === "success") {
       
        console.log("Formularz został pomyślnie wysłany!");
      } else {
        
        console.error("Błąd podczas wysyłania formularza:", data.errors);
      }
    } catch (error) {
      console.error("Błąd:", error.message);
    }
  };

  return (
    <>
      <section className="form-section" id="contact">
        <div>
          <img className="form-bg" src={BackgroundContact} alt="background clouths" />
        </div>
        <div className="form-block">
          <div className="form-heading-block">
            <h1 className="form-heading">Skontaktuj się z nami</h1>
            <img src={Decoration} alt="decoration" />
          </div>
          <form className="form-container" onSubmit={handleSubmit}>
            <div>
              <div className="row-columns">
                <label className="two-labels" htmlFor="name">
                  Wpisz swoje imię
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Arkadiusz"
                  />
                </label>
                <label className="two-labels" htmlFor="email">
                  Wpisz swój Email
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abc@xyz.pl"
                  />
                </label>
              </div>
              <div>
                <label className="third-label">
                  Wpisz swoją wiadomość
                  <textarea
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  />
                </label>
              </div>
              <div className="form-btn-block">
                <button type="submit" className="form-btn">
                  Wyślij
                </button>
              </div>
              {errors.message && <p className="error-message">{errors.message}</p>}
            </div>
          </form>
        </div>
      </section>
      <footer className="footer-block">
        <div className="Copyright-block">
          <p>Copyright by Coders Lab</p>
        </div>
        <div className="footer-icon-block">
          <img className="footer-fb-icon" src={Facebook} alt="Facebook icon" />
          <img src={Instagram} alt="Instagram icon" />
        </div>
      </footer>
    </>
  );
};

export default Contact;