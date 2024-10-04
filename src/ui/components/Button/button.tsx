import React from 'react';
import styles from './button.module.scss';
import type { ButtonProps } from './types/types';

function Button({
  size = 'medium',
  backgroundColor = '#1ea7fd',
  color = 'white',
  label,
  hover = undefined,
  active = undefined,
  focus = undefined,
  disabled = false,
  icon,

  ...props
}: ButtonProps) {
  const buttonStyle = {
    '--background-color': backgroundColor,
    '--color': color,
    '--hover-background-color': hover !== null ? hover : backgroundColor,
    '--active-background-color': active !== null ? active : backgroundColor,
    '--focus-background-color': focus !== null ? focus : backgroundColor,
  } as React.CSSProperties;

  const buttonClass = `
    ${styles.button}
    ${styles[`button--${size}`]} 
    ${disabled ? styles['button--disabled'] : ''} 
  `;

  return (
    <button
      type="button"
      className={buttonClass}
      style={buttonStyle}
      disabled={disabled}
      {...props}
    >
      {label}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}

export default Button;
