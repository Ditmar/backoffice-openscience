import React from 'react';
import styles from './button.module.scss';
import type { ButtonProps } from './types/types';

function Button({
  size = 'medium',
  backgroundColor = '#1ea7fd',
  color = 'white',
  label,
  borderRadius = '3em',
  icon,
  ...props
}: ButtonProps) {
  const buttonStyle = {
    backgroundColor,
    color,
    borderRadius
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[`button--${size}`]} ${styles['button--secondary']}`}
      style={buttonStyle}
      {...props}
    >
      {label}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}

export default Button;
