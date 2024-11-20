import classNames from 'classnames';
import styles from './GhostButtonIcon.module.scss';
import type { IProps } from './types/IProps';

function GhostButtonIcon({ children, variant = 'ghost-primary', onClick }: IProps) {
  const buttonClass = classNames(styles['Ghost-Button-Icon'], {
    [styles['Ghost-Button-Icon--ghost-primary']]: variant === 'ghost-primary',
    [styles['Ghost-Button-Icon--ghost-secondary']]: variant === 'ghost-secondary',
    [styles['Ghost-Button-Icon--ghost-tertiary']]: variant === 'ghost-tertiary',
    [styles['Ghost-Button-Icon--ghost-disabled']]: variant === 'ghost-disabled',
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={variant === 'ghost-disabled'}>
      <span className={styles['button-variant-ghost']}>{children}</span>
    </button>
  );
}

export default GhostButtonIcon;
