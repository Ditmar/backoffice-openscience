import React from 'react';
import './Toggle.css'; 

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
  labelOn?: string;
  labelOff?: string;
  disabled?: boolean;
  headerText?: string;
}

const Toggle: React.FC<ToggleProps> = ({ isOn, onToggle, labelOn = 'On', labelOff = 'Off', disabled, headerText }) => {
  return (
    <div className="toggle-wrapper">
      {headerText && <div className="toggle-header">{headerText}</div>}
      <div className={`toggle-container ${disabled ? 'disabled' : ''}`}>
        <input 
          type="checkbox" 
          checked={isOn} 
          onChange={onToggle} 
          disabled={disabled}
          className="toggle-checkbox"
        />
        <span className="toggle-label">{isOn ? labelOn : labelOff}</span>
      </div>
    </div>
  );
};

export default Toggle;
