import React, { useState } from 'react';
import type { IProps } from './types/IProps';
import styles from './styles.module.scss';
import Icon1 from '../../../../assets/icons/article-management.svg?raw';
import Icon2 from '../../../../assets/icons/author-management.svg?raw';

function SideMenuButton({ children, icon, color, variant, onClick }: IProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  const selectedIcon = icon ?? (children === 'Article Management' ? Icon1 : Icon2);

  return (
    <button
      data-testid="side-menu-button-styles"
      className={`${styles['side-menu-button']} ${styles[color ?? '']} ${
        variant ? styles[variant] : ''
      } ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      {selectedIcon && <img src={selectedIcon} alt="Icon" />}
      {children}
    </button>
  );
}

export default SideMenuButton;
