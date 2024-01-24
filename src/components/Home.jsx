import React from 'react';
import HomeHeader from './Home/HomeHeader';
import HomeThreeColumns from './Home/HomeThreeColumns';
import HomeSimplySteps from './Home/HomeSimplySteps';
import HomeAboutUs from './Home/HomeAboutUs';
import HomeWhoWeHelp from './Home/HomeWhoWeHelp';
import Contact from './Home/Contact';
import '../scss/main.scss';




const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeSimplySteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <Contact />
      {/* Dodaj inne komponenty Home w razie potrzeby */}
    </div>
  );
};

export default Home;