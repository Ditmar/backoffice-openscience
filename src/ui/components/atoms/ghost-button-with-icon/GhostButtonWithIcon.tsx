import classNames from 'classnames';
import styles from './GhostButtonWithIcon.module.scss';
import type { GhostProps } from './types/types';

function GhostButtonWithIcon({ size = 'medium', disabled = false, onClick }: GhostProps) {
  const sizeClass = styles[`btn--${size}`];

  return (
    <div className={styles['btn-container']}>
      <button
        className={classNames(styles['btn-main'], sizeClass, { [styles['btn--disabled']]: disabled })}
        onClick={onClick}
        disabled={disabled}
        aria-label="add-icon"
      >
        <span className={styles['btn-text']}>Ghost button</span>
        <span className={styles['btn-icon-square']}>+</span>
      </button>
    </div>
  );
}

export default GhostButtonWithIcon;