import classNames from 'classnames';
import type { IConfigureViewButtonProps } from './types/IConfigureViewButtonProps';
import styles from './ConfigureViewButton.module.scss';
import { Icon } from '../../utils/svg-icons/icons';

function ConfigureViewButton({
  icon = undefined,
  text,
  onClick,
  variant,
  size,
  isBurger = false,
}: IConfigureViewButtonProps) {
  const buttonClass = classNames(styles['configure-view-button'], {
    [styles[`configure-view-button--${variant}`]]: variant,
    [styles[`configure-view-button--${size}`]]: size,
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {isBurger ? (
        <div className={styles['configure-view-button__burger-menu']} data-testid="burger-menu">
          <div className={styles['configure-view-button__burger-icon1']} />
          <div className={styles['configure-view-button__burger-icon2']} />
          <div className={styles['configure-view-button__burger-icon3']} />
        </div>
      ) : (
        icon && <Icon src={icon} className={styles['configure-view-button__icon']} />
      )}
      <span className={styles['configure-view-button__text']}>{text}</span>
    </button>
  );
}

export default ConfigureViewButton;
