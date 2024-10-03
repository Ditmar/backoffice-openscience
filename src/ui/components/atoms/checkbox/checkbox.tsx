// checkbox.tsx
import React, { useState, useEffect } from 'react';
import type { CheckboxProps } from './types/iProps';
import './checkbox.scss';

const Checkbox = function Checkbox({    
  label,
  size = 'medium',
  checked,
  disabled = false,
  onChange,
  autoFocus = false,
  id = `checkbox-${Math.random().toString(36).substr(2, 9)}`, // Valor por defecto
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked ?? false);

  useEffect(() => {
    if (autoFocus) {
      const inputElement = document.getElementById(id);
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [autoFocus, id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setIsChecked((prevChecked) => !prevChecked);
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
        checked={checked ?? isChecked}
        disabled={disabled}
        onChange={handleChange}
        autoFocus={autoFocus}
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
