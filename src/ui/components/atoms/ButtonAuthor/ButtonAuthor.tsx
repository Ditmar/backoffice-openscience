import React from 'react';
import type { IProps } from './types/IProps';
import styles from './ButtonAuthor.module.scss';

export function Button(props: IProps): JSX.Element {
  const { label, onClick, variant = 'default', disabled = false, className } = props;

  const handleClick = (event: MouseEvent) => {
    let count = 0;

    if (onClick) {
      count += 1;
      onClick({ count, event });
    }
  };

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className ?? ''}`}
      onClick={(e) => {
        handleClick(e.nativeEvent);
      }}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
