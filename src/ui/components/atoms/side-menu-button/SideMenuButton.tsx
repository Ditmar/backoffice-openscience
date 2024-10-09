import React, { useState } from 'react';
import classNames from 'classnames';
import { Icon } from '../../utils/svg-icons/icons';
import type { IProps } from './types/IProps';
import styles from './styles.module.scss';
import articleManagementSvg from '../../../../assets/icons/article-management.svg?raw';
import authorManagementSvg from '../../../../assets/icons/author-management.svg?raw';

function SideMenuButton({ children, icon, color, variant, onClick }: IProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  const selectedIcon =
    icon ?? (children === 'Article Management' ? articleManagementSvg : authorManagementSvg);

  const buttonClass = classNames(
    styles['side-menu-button'],
    color && styles[color],
    variant && styles[variant],
    { [styles.active]: isActive },
  );

  return (
    <button data-testid="side-menu-button-styles" className={buttonClass} onClick={handleClick}>
      {selectedIcon && <Icon src={selectedIcon} size="24px" className={styles.icon} />}
      {children}
    </button>
  );
}

export default SideMenuButton;
