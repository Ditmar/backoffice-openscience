import React, { useEffect, useRef } from 'react';
import type { RadioButtonProps } from './types/IProps'; // Asegúrate de que la importación sea correcta
import styles from './radiobutton.module.scss'; // Importa los estilos como módulo

function RadioButton({
  label,
  size = 'medium',
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
    if (disabled) return;
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`${styles.radiobutton} ${styles[`radiobutton--${size}`]}`}>
      <input
        type="radio"
        className={styles.radiobutton__input} // Usa la clase del módulo
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
