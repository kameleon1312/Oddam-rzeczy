import React from "react";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";
import PeopleImage from "../../assets/People.jpg";

const HomeAboutUs = () => {
  return (
    <section id="about" className="home-about-us">
      <div className="left-container">
        <h2>O Nas</h2>
        <div className="decoration-section">
          <img src={Decoration} alt="Decoration" className="decoration-logo" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          malesuada urna in arcu hendrerit, in rhoncus elit congue. Suspendisse
          potenti.
        </p>
        <div className="signature-section">
          <img src={Signature} alt="Signature" className="signature" />
        </div>
      </div>
      <div className="right-container">
        <img src={PeopleImage} alt="People" className="people-image" />
      </div>
    </section>
  );
};

export default HomeAboutUs;