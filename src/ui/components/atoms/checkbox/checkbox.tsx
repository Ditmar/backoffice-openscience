import React, { useState, useEffect, useRef } from 'react';
import type { CheckboxProps } from './types/iProps';
import './checkbox.scss';

function Checkbox({
  label,
  size = 'medium',
  checked,
  disabled = false,
  onChange,
  id,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked ?? false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isChecked && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChecked]);

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
        ref={inputRef}
      />
      {label && (
        <label className="checkbox__label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
