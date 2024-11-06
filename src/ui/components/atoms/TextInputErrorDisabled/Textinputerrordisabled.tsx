import React from 'react';
import { IoAlertCircle } from 'react-icons/io5';
import type { TextInputErrorDisabledProps } from './types/IProps';
import styles from './TextInputErrorDisabled.module.scss';

function TextInputErrorDisabled({
  errorMessage,
  isDisabled,
  placeholder,
  value,
}: TextInputErrorDisabledProps) {
  return (
    <div className={styles.inputWrapper}>
      <span className={styles.inputContainer}>
        <input
          className={`${styles.input} ${errorMessage ? styles.error : ''} ${
            isDisabled ? styles.disabled : ''
          }`}
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
