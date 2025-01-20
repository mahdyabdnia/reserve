import React, { useState } from 'react';
import './styles.css';

const SwitchButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
      <span className="slider round"></span>
    </label>
  );
};

export default SwitchButton;

