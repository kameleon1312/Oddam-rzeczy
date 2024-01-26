import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import Decoration from '../../assets/Decoration.svg';

const HomeWhoWeHelp = () => {
  const [activeOption, setActiveOption] = useState('foundations');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [activeOption]);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from(activeOption)
        .select('*');

      if (error) {
        throw error;
      }

      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="whoWeHelp-section" id="whoWeHelp">
      <h2 className="whoWeHelp-heading">Komu pomagamy?</h2>
      <div className="decoration-section">
        <img
          src={Decoration}
          alt="Decoration"
          className="decoration-logo"
        />
      </div>
      <div className="three-btns">
        <button className={`whoWeHelp-btn ${activeOption === 'foundations' ? 'active' : ''}`} onClick={() => handleOptionChange('foundations')}>Fundacjom</button>
        <button className={`whoWeHelp-btn ${activeOption === 'ngo' ? 'active' : ''}`} onClick={() => handleOptionChange('ngo')}>Organizacjom pozarządowym</button>
        <button className={`whoWeHelp-btn ${activeOption === 'local' ? 'active' : ''}`} onClick={() => handleOptionChange('local')}>Lokalnym zbiórkom</button>
      </div>

      <div className="content">
        {data.map((entry) => (
          <div key={entry.id} className="collection-containers">
            <div className="title-subtitle-description">
              <div className="title-subtitle">
                <div className="collection-container-heading">{entry.title}</div>
                {entry.subtitle && <div className="subtitle">{entry.subtitle}</div>}
              </div>
              <div className="description">{entry.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="page-numbers">
      </div>
    </div>
  );
};

export default HomeWhoWeHelp;