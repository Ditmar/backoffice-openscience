import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import type { GhostButtonProps } from './types/types';

function GhostButton({
  ghostbutton,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}: GhostButtonProps) {
  const buttonClass = classNames(
    styles['ghost-button'],
    {
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
    },
    {
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
    },
    {
      [styles['ghost-button--disabled']]: disabled,
    },
  );

  return (
    <button
      data-testid="ghost-button"
      className={buttonClass}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      {ghostbutton}
    </button>
  );
}

export default GhostButton;
