import React, { useState, useEffect, useRef } from 'react';
import type { CheckboxProps } from './types/iProps';
import './checkbox.scss';

function Checkbox({
  label,
  size = 'medium',
  checked,
  disabled = false,
  onChange,
  autoFocus = false,
  id,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked ?? false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

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
        ref={inputRef}
        checked={checked ?? isChecked}
        disabled={disabled}
        onChange={handleChange}
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
