import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; 
import HeroImage from '../../assets/Home-Hero-Image.jpg';
import Decoration from '../../assets/Decoration.svg';
import Navigation from './Navigation';

const HomeHeader = () => {
  return (
    <div className="home-header" >
      <div className="top-row">
        <div className="left-section">
          <img src={HeroImage} alt="Logo" />
        </div>
        <div className="right-section">
          <Navigation />
        </div>
      </div>
      <div className="bottom-row" >
        <div className="main-section">
          <h1>
            Zacznij pomagać! <br />
            Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <div className="decoration-section">
            <img
              src={Decoration}
              alt="Decoration"
              className="decoration-logo"
            />
          </div>
          <div className="buttons-section">
            <RouterLink to="/logowanie"> 
              <button className="give-items-button">ODDAJ<br /> RZECZY</button>
            </RouterLink>
            <RouterLink to="/logowanie"> 
              <button className="organize-collection-button">ZORGANIZUJ<br />ZBIÓRKĘ</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;