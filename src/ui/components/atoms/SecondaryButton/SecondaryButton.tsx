import classNames from 'classnames';
import type { SecondaryButtonProps } from './types/SecondaryButtonProps';
import styles from './styles.module.scss';

function SecondaryButton(props: SecondaryButtonProps) {
  const { children, variant, onClick, display } = props;

  const displayClass = classNames(styles.display, {
    [styles.primary]: variant === 'small',
    [styles.secondary]: variant === 'medium',
    [styles.tertiary]: variant === 'large',
    [styles.active]: variant === 'active',
    [styles.disabled]: variant === 'disabled',
  });

  return (
    <button
      className={displayClass}
      onClick={variant !== 'disabled' ? onClick : undefined}
      disabled={variant === 'disabled'}
      style={{ display }}
    >
      <span className={styles['add-button__text']}>{children}</span>
    </button>
  );
}

export default SecondaryButton;
