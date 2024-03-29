import React from 'react';
import '../../scss/HomeStyle/ThreeColumns.scss';

const HomeThreeColumns = () => {
  return (
    <div className="three-columns-section">
      <div className="column">
        <h2>10</h2>
        <h3>Oddanych worków</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="column">
        <h2>5</h2>
        <h3>Wspartych organizacji</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="column">
        <h2>7</h2>
        <h3>Zorganizowanych zbiórek</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default HomeThreeColumns;