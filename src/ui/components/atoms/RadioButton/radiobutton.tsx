import React, { useEffect, useRef } from 'react';
import type { RadioButtonProps } from './types/IProps';
import styles from './radiobutton.module.scss';

function RadioButton({
  label,
  checked,
  disabled = false,
  onChange,
  autoFocus = false,
  id,
}: RadioButtonProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e);
    }
  };

  return (
    <div className={styles.radiobutton}>
      <input
        type="radio"
        className={styles.radiobutton__input}
        id={id}
        ref={inputRef}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      {label && (
        <label className={styles.radiobutton__label} htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}

export default RadioButton;
