import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';
import Decoration from '../../assets/Decoration.svg';

const HomeWhoWeHelp = () => {
  const [activeOption, setActiveOption] = useState('foundations');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = {
    foundations: 3,
    ngo: 2,
    local: 1,
  };

  useEffect(() => {
    fetchData();
  }, [activeOption, currentPage]);

  const fetchData = async () => {
    try {
      let { data, error } = await supabase
        .from(activeOption)
        .select('*');

      if (error) {
        throw error;
      }

      setTotalPages(Math.ceil(data.length / itemsPerPage[activeOption]));

      if (activeOption === 'local') {
        setData(data || []);
      } else {
        data = data.slice((currentPage - 1) * itemsPerPage[activeOption], currentPage * itemsPerPage[activeOption]);
        setData(data || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleOptionChange = (option) => {
    setActiveOption(option);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationNumbers = () => {
    if (activeOption === 'local') {
      return null;
    }

    return (
      <div className="page-numbers">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index + 1}
            className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </span>
        ))}
      </div>
    );
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

      {renderPaginationNumbers()}
    </div>
  );
};

export default HomeWhoWeHelp;