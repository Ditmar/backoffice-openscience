import React from 'react';
import type { TextInputErrorDisabledProps } from './types/IProps';
import styles from './TextInputErrorDisabled.module.scss';
import { IoAlertCircle } from "react-icons/io5";



const TextInputErrorDisabled: React.FC<TextInputErrorDisabledProps> = ({
    variant = 'medium',
    errorMessage,
    isDisabled,
    placeholder,
    value,
  }) => {
    return (
      <div className={styles.inputWrapper}>
        <span className={styles.inputContainer}>
          <input
            className={`${styles.input} ${errorMessage ? styles.error : ''} ${isDisabled ? styles.disabled : ''}`}
            disabled={isDisabled}
            placeholder={placeholder}
            value={value}
          />
          {errorMessage && <IoAlertCircle className={styles.icon} />}
        </span>
        {errorMessage && !isDisabled && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>
    );
  };
  
  export default TextInputErrorDisabled;
 

