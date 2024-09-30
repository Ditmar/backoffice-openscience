import React from 'react';
import styles from './styles.module.scss';
import type { GhostButtonProps } from './types/types';

// Cambiado a declaración de función
function GhostButton({
  ghostbutton,
  variant,
  size = 'medium',
  disabled = false,
  onClick,
}: GhostButtonProps) {
  const buttonClass = [
    styles['ghost-button'],
    styles[`ghost-button--${variant}`],
    styles[`ghost-button--${size}`],
    disabled ? styles['ghost-button--disabled'] : '',
  ].join(' ');

  return (
    <button
      data-testid="ghost-button"
      className={buttonClass}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      // Tab index por accesibilidad: si está deshabilitado, -1
      tabIndex={disabled ? -1 : 0}
    >
      {ghostbutton}
    </button>
  );
}

export default GhostButton;
