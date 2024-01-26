import React from "react";
import Icon1 from '../../assets/Icon-1.svg';
import Icon2 from '../../assets/Icon-2.svg';
import Icon3 from '../../assets/Icon-3.svg';
import Icon4 from '../../assets/Icon-4.svg';
import Decoration from '../../assets/Decoration.svg';
import { Element } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom'; 


const HomeSimplySteps = () => {
    return (
        <Element name="steps"><section className="home-simply-steps" id="steps">
            <div className="header-container">
                <h2>Wystarczą 4 proste kroki</h2>
                <div className="decoration-section">
                    <img
                        src={Decoration}
                        alt="Decoration"
                        className="decoration-logo"
                    />
                </div>
            </div>
            <div className="steps-container">
                <div className="steps">
                <div className="step">
                    <img src={Icon1} alt="Krok 1" />
                    <p>Wybierz rzeczy</p>
                    <span>ubrania, zabawki, sprzęt i inne</span>
                </div>
                <div className="step">
                    <img src={Icon2} alt="Krok 2" />
                    <p>Spakuj je</p>
                    <span>skorzystaj z worków na śmieci</span>
                </div>
                <div className="step">
                    <img src={Icon3} alt="Krok 3" />
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <span>wybierz zaufane miejsce</span>
                </div>
                <div className="step">
                    <img src={Icon4} alt="Krok 4" />
                    <p>Zamów kuriera</p>
                    <span>kurier przyjedzie w dogodnym terminie</span>
                </div>
                </div>
            </div>
            <div className="link-to-donate">
                <RouterLink to="/logowanie">
                ODDAJ<br /> RZECZY
                </RouterLink>
            </div>
        </section></Element>
    );
}

export default HomeSimplySteps;