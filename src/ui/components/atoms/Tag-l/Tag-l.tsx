import React from 'react';
import classNames from 'classnames';
import type { TagProps } from './types/types';
import styles from './tag-l.module.scss';

function TagL(props: TagProps) {
  const { label, size = 'medium', variant = 'primary', disabled = false, onClick } = props;

  const tagClass = classNames(styles.tag, {
    [styles['tag--primary']]: variant === 'primary',
    [styles['tag--secondary']]: variant === 'secondary',
    [styles['tag--tertiary']]: variant === 'tertiary',
    [styles['tag--disabled']]: disabled,
    [styles['tag--small']]: size === 'small',
    [styles['tag--medium']]: size === 'medium',
    [styles['tag--large']]: size === 'large',
  });

  const handleKeyPress = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (!disabled && (e.key === 'Enter' || e.key === ' ')) {
      onClick?.();
    }
  };

  return (
    <span
      className={tagClass}
      onClick={!disabled ? onClick : undefined}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={!disabled ? 0 : -1}
    >
      {label}
    </span>
  );
}

export default TagL;
