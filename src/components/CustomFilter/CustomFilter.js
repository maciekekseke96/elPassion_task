import React from 'react';
import './CustomFilter.scss';

const CustomFilter = ({ icon, description, number, selected, setFilter }) => {
  const Icon = icon;
  return (
    <div
      className={`filter ${selected ? 'selected' : ''}`}
      onClick={() => setFilter()}
    >
      <div className="filter__description">
        <Icon />
        <span className="name">{description}</span>
      </div>
      <div className="filter__number">
        <span className="number">{number}</span>
      </div>
    </div>
  );
};

export default CustomFilter;
