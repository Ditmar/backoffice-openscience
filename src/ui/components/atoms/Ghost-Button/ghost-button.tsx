import React from 'react';
import styles from './styles.module.scss';
import type { GhostButtonProps } from './types/types';

const GhostButton: React.FC<GhostButtonProps> = ({
  ghostbutton,
  variant,
  size = 'medium',
  disabled = false,
  onClick,
}) => {
  const buttonClass = [
    styles['ghost-button'],
    styles[`ghost-button--${variant}`],
    styles[`ghost-button--${size}`],
    disabled ? styles['ghost-button--disabled'] : ''
  ].join(' ');

  return (
    <button
      data-testid="ghost-button"
      className={buttonClass}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      tabIndex={!disabled ? 0 : -1}
    >
      {ghostbutton}
    </button>
  );
};

export default GhostButton;
