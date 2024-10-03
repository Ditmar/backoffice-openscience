import React, { useState } from 'react';
import type { IProps } from './types/IProps';
import styles from './styles.module.scss';

const SideMenuButton: React.FC<IProps> = function SideMenuButton({
  children,
  icon,
  color,
  variant,
}) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      data-testid="side-menu-button-styles"
      className={`${styles['side-menu-button']} ${styles[color ?? '']} ${
        variant ? styles[variant] : ''
      } ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      {icon && <img src={icon} alt="Icon" />}
      {children}
    </button>
  );
};

export default SideMenuButton;
