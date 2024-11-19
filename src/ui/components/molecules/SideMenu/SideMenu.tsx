import React from 'react';
import SideMenuButton from '../../atoms/side-menu-button/SideMenuButton';
import styles from './SideMenu.module.scss';
import type { ISideMenuProps } from '../SideMenu/types/Iprops';



function SideMenu({ menuItems, onHideMenu }: ISideMenuProps) {
    return (
      <aside className={styles['side-menu']}>
        <div className={styles['menu-header']}>
          <button className={styles['hide-menu-button']} onClick={onHideMenu}>
            &lt; HIDE MENU
          </button>
        </div>
        <nav className={styles['menu-list']}>
          {menuItems.map((item, index) => (
            <SideMenuButton
              key={index}
              icon={item.icon}
              path={item.path}
              basePath={item.basePath}
            >
              {item.title}
            </SideMenuButton>
          ))}
        </nav>
      </aside>
    );
  }
  
  export default SideMenu;
  