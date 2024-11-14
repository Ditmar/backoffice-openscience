import classNames from 'classnames';
import styles from './GhostButtonWithIcon.module.scss';
import type { IGhostButtonWithIconProps } from './types/IGhostButtonWithIconProps';
import { Icon } from '../../utils/svg-icons/icons';

function GhostButtonWithIcon(props: IGhostButtonWithIconProps) {
  const { children, variant, onClick, display, icon } = props;

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
      {icon && <Icon data-testid="icon_add" src={icon} className={`${styles.icon_add}`} />}
    </button>
  );
}

export default GhostButtonWithIcon;
