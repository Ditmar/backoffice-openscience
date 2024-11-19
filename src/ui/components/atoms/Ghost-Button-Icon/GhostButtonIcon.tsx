import classNames from 'classnames';
import styles from './GhostButtonIcon.module.scss';

export interface IProps {
  children: React.ReactNode;
  variant?: 'ghost-primary' | 'ghost-secondary' | 'ghost-tertiary' | 'ghost-quaternary' | 'ghost-disabled';
  onClick?: () => void;
}

function GhostButtonIcon({ children, variant = 'ghost-primary', onClick }: IProps) {
  const buttonClass = classNames(styles['Ghost-Button-Icon'], {
    [styles['Ghost-Button-Icon--ghost-primary']]: variant === 'ghost-primary',
    [styles['Ghost-Button-Icon--ghost-secondary']]: variant === 'ghost-secondary',
    [styles['Ghost-Button-Icon--ghost-tertiary']]: variant === 'ghost-tertiary',
    [styles['Ghost-Button-Icon--ghost-quaternary']]: variant === 'ghost-quaternary',
    [styles['Ghost-Button-Icon--ghost-disabled']]: variant === 'ghost-disabled',
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={variant === 'ghost-disabled'}>
      <span className={styles['button-variant-ghost']}>{children}</span>
    </button>
  );
}

export default GhostButtonIcon;
