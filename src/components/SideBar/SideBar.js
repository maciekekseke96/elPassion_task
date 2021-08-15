import React from 'react';
import SystemButtons from '../SystemButtons/SystemButtons';
import Navigation from '../Navigation/Navigation';
import './SideBar.scss';

const SideBar = ({ filter, setFilter }) => {
  return (
    <div className="side-bar">
      <SystemButtons />
      <Navigation filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default SideBar;
