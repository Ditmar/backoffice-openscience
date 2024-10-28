import classNames from 'classnames';
import styles from './SecondaryButtonIcon.module.scss';
import type { ISecondaryButtonIconProps } from './types/ISecondaryButtonIconProps';
import { Icon } from '../../utils/svg-icons/icons';

function SecondaryButtonIcon({
  size = 'medium',
  disabled = false,
  onClick,
  icon,
}: ISecondaryButtonIconProps) {
  const buttonClass = classNames(styles['btn-main'], {
    [styles['btn-main--small']]: size === 'small',
    [styles['btn-main--medium']]: size === 'medium',
    [styles['btn-main--large']]: size === 'large',
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {icon && <Icon data-testid="icon_add" src={icon} className={styles['btn-icon']} />}
    </button>
  );
}

export default SecondaryButtonIcon;
