
import React, { useState } from 'react';
import type { CheckboxProps } from './types/iProps';
import './checkbox.scss';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  size = 'medium',
  checked,
  disabled = false,
  onChange,
  autoFocus = false,
  id,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(e);
    }
  };
  

  return (
    <div className={`checkbox checkbox--${size}`}>
      <input
        type="checkbox"
        className="checkbox__input"
        id={id} 
        checked={checked !== undefined ? checked : isChecked}
        disabled={disabled}
        onChange={handleChange}
        autoFocus={autoFocus}
        {...props}
      />   

      {label && (
        <label className="checkbox__label" htmlFor={id}>
    
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
