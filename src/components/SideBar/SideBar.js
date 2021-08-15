import React from 'react';
import SystemButtons from '../SystemButtons/SystemButtons';
import Navigation from '../Navigation/Navigation';
import './SideBar.scss';

const SideBar = () => {
  return (
    <div className="side-bar">
      <SystemButtons />
      <Navigation />
    </div>
  );
};

export default SideBar;
