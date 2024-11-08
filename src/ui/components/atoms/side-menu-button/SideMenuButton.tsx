import { useState } from 'react';
import classNames from 'classnames';
import { Icon } from '../../utils/svg-icons/icons';
import type { IProps } from './types/IProps';
import styles from './styles.module.scss';

function SideMenuButton({ children, icon, color, variant = 'primary', path, basePath }: IProps) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    if (path) {
      window.location.href = path;
    }
  };

  const buttonClass = classNames(
    styles['side-menu-button'],
    {
      [styles['side-menu-button--primary']]: variant === 'primary',
      [styles['side-menu-button--secondary']]: variant === 'secondary',
      [styles.active]: basePath === path,
    },
    color && styles[color],
  );

  return (
    <button data-testid="side-menu-button-styles" className={buttonClass} onClick={handleClick}>
      <Icon src={icon} size="24px" className={styles.icon} />
      {children}
    </button>
  );
}

export default SideMenuButton;
