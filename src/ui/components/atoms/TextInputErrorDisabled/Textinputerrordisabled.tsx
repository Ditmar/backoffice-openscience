import React from 'react';
import { IoAlertCircle } from 'react-icons/io5';
import type { TextInputErrorDisabledProps } from './types/IProps';
import styles from './TextInputErrorDisabled.module.scss';

function TextInputErrorDisabled({
  variant = 'medium',
  errorMessage,
  isDisabled,
  placeholder,
  value,
}: TextInputErrorDisabledProps) {
  const inputClass = `${styles.input} ${errorMessage ? styles.error : ''} ${
    isDisabled ? styles.disabled : ''
  } ${styles[variant]}`; // Usa variant para modificar la clase del input

  return (
    <div className={styles.inputWrapper}>
      <span className={styles.inputContainer}>
        <input
          className={inputClass}
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
        />
        {errorMessage && <IoAlertCircle className={styles.icon} />}
      </span>
      {errorMessage && !isDisabled && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}

export default TextInputErrorDisabled;
