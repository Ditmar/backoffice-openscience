import classNames from 'classnames';
import styles from './DangerButton.module.scss';
import type { IProps } from './types/IProps';

function DangerButton({ children, variant = 'danger-primary', onClick }: IProps) {
  const buttonClass = classNames(styles['button-danger'], {
    [styles['button-danger--danger-primary']]: variant === 'danger-primary',
    [styles['button-danger--danger-secondary']]: variant === 'danger-secondary',
    [styles['button-danger--danger-tertiary']]: variant === 'danger-tertiary',
    [styles['button-danger--danger-disabled']]: variant === 'danger-disabled',
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      <span className={styles['button-variant-danger']}>{children}</span>
    </button>
  );
}

export default DangerButton;