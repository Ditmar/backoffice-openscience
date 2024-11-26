import classNames from 'classnames';
import styles from './PrimaryButtonIcon.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../utils/svg-icons/icons';

function PrimaryButtonIcon({ size = 'medium', disabled = false, onClick, icon }: IProps) {
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

export default PrimaryButtonIcon;
