import React, { useState } from 'react';
import type { ISideMenuProps } from './types/Iprops';
import SideMenuButton from '../../atoms/side-menu-button/SideMenuButton';
import styles from './SideMenu.module.scss';
import circleLeftIcon from '../../../../assets/icons/circle-left.svg?raw';
import linesIcon from '../../../../assets/icons/lines.svg?raw';

function SideMenu({ menuItems, onClick }: ISideMenuProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="side-menu"
      className={`${styles['side-menu']} ${isCollapsed ? styles.collapsed : ''}`}
    >
      <div className={styles['menu-header']}>
        <button className={styles['hide-menu-button']} onClick={toggleMenu}>
          <span
            className={styles.icon}
            dangerouslySetInnerHTML={{
              __html: isCollapsed ? linesIcon : circleLeftIcon,
            }}
          />
          {!isCollapsed && 'HIDE MENU'}
        </button>
      </div>
      <nav className={styles['menu-list']}>
        {menuItems.map((item) => (
          <SideMenuButton
            key={item.id}
            icon={item.icon}
            path={item.path}
            basePath={item.basePath}
            className={isCollapsed ? styles.collapsed : ''}
            onClick={onClick}
          >
            {isCollapsed ? null : item.title}
          </SideMenuButton>
        ))}
      </nav>
    </aside>
  );
}

export default SideMenu;
