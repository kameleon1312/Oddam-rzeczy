import React from "react";
import BackgroundContact from "../../assets/Background-Contact-Form.jpg";
import Decoration from "../../assets/Decoration.svg";
import Facebook from "../../assets/Facebook.svg";
import Instagram from "../../assets/Instagram.svg";



const Contact = () => {
  return (
    <>
      <section className="form-section" id="contact">
        <div>
          <img
            className="form-bg"
            src={BackgroundContact}
            alt="background clouths"
          />
        </div>
        <div className="form-block">
          <div className="form-heading-block">
            <h1 className="form-heading">Skontaktuj się z nami</h1>
            <img src={Decoration} alt="decoration" />
          </div>
          <form className="form-container">
            <div>
              <div className="row-columns">
                <label className="two-labels" htmlFor="text">
                  Wpisz swoje imię
                  <input type="text" placeholder="Arkadiusz" />
                </label>
                <label className="two-labels" htmlFor="text">
                  Wpisz swój Email
                  <input type="text" placeholder="abc@xyz.pl" />
                </label>
              </div>
              <div>
                <label className="third-label">
                  Wpisz swoją wiadomość
                  <textarea
                    type="text"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  />
                </label>
              </div>
              <div className="form-btn-block">
                <button className="form-btn">Wyślij</button>
              </div>
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