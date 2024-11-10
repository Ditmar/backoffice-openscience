/*import React from 'react';
import './Toggle.css'; 

const Toggle = ({ isOn, onToggle, labelOn = 'On', labelOff = 'Off', disabled, headerText }) => {
  return (
    <div className="toggle-wrapper">
      {headerText && <div className="toggle-header">{headerText}</div>}
      <div className={`toggle-container ${disabled ? 'disabled' : ''}`}>
        <input 
          type="checkbox" 
          checked={isOn} 
          onChange={onToggle} 
          disabled={disabled}//true disabled
          className="toggle-checkbox"
        />
        <span className="toggle-label">{isOn ? labelOn : labelOff}</span>
      </div>
    </div>
  );
};

export default Toggle;*/