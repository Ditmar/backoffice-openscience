import React from 'react';
import type { TagProps } from './types/types';
import styles from './tag.module.scss';
import classNames from 'classnames';

const Tag: React.FC<TagProps> = ({ label, size = 'medium', variant = 'default', disabled = false, onClick }) => {
  const tagClass = classNames(
    styles.tag, 
    styles[`tag--${size}`], 
    styles[`tag--${variant}`], 
    { [styles['tag--disabled']]: disabled }
  );

  return (
    <span className={tagClass} onClick={!disabled ? onClick : undefined}>
      {label}
    </span>
  );
};

export default Tag;