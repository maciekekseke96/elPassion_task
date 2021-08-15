import React from 'react';
import CustomSystemButton from '../CustomSystemButton/CustomSystemButton';
import './SystemButtons.scss';

const SystemButtons = () => {
  return (
    <div className="system-buttons-container">
      <CustomSystemButton category="red" />
      <CustomSystemButton category="yellow" />
      <CustomSystemButton category="green" />
    </div>
  );
};

export default SystemButtons;
