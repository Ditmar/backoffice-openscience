import React from 'react';
import type { IProps } from './types/IProps';
import styles from './styles.module.scss';

function SideMenuButton({ children, icon, color, variant }: IProps) {
  const buttonClasses = `${styles['side-menu-button']} ${styles[color ?? '']} ${
    variant ? styles[variant] : ''
  }`;

  return (
    <button data-testid="side-menu-button-styles" className={buttonClasses}>
      {icon && <img src={icon} alt="Icon" />}
      {children}
    </button>
  );
}

export default SideMenuButton;
