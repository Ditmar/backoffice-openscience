import classNames from 'classnames';
import styles from './GhostButtonIcon.module.scss';
import type { IProps } from './types/IProps';

function GhostButtonIcon({ children, variant = 'ghost-primary', onClick }: IProps) {
  const buttonClass = classNames(styles['ghost-button-icon'], {
    [styles['ghost-button-icon--ghost-primary']]: variant === 'ghost-primary',
    [styles['ghost-button-icon--ghost-secondary']]: variant === 'ghost-secondary',
    [styles['ghost-button-icon--ghost-tertiary']]: variant === 'ghost-tertiary',
    [styles['ghost-button-icon--ghost-disabled']]: variant === 'ghost-disabled',
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={variant === 'ghost-disabled'}>
      <span className={styles['button-variant-ghost']}>{children}</span>
    </button>
  );
}

export default GhostButtonIcon;
