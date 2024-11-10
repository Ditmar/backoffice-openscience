import React from 'react';
import classNames from 'classnames';
import './Toggle.css';

function Toggle({ isOn, onToggle, labelOn = 'On', labelOff = 'Off', disabled, headerText }) {
   const toggleClass = classNames('toggle-container', {
    'disabled': disabled,
  });

  const labelClass = classNames('toggle-label', {
    'on': isOn,
    'off': !isOn,
  });

  return (
    <div className="toggle-wrapper">
      {headerText && <div className="toggle-header">{headerText}</div>}
      <div className={toggleClass}>
        <label className="toggle-label-wrapper">
          <input
            type="checkbox"
            checked={isOn}
            onChange={onToggle}
            disabled={disabled}
            className="toggle-checkbox"
            aria-checked={isOn}
          />
          <span className={labelClass}>{isOn ? labelOn : labelOff}</span>
        </label>
      </div>
    </div>
  );
}

export default Toggle;
