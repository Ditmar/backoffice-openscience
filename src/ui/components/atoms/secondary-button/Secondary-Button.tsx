import classNames from 'classnames';
import styles from './Secondary-Button.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../utils/svg-icons/icons';

function SecundaryButton(props: IProps) {
  const { children, variant, onClick, icon } = props;
  const displayClass = classNames(styles.display, {
    [styles.primary]: variant === 'Small',
    [styles.secondary]: variant === 'Medium',
    [styles.tertiary]: variant === 'Big',
    [styles.active]: variant === 'Active',
    [styles.disable]: variant === 'Disable',
  });
  return (
    <button className={displayClass} onClick={onClick}>
      <span className={styles['add-button__text']}>{children}</span>
      {icon && <Icon data-testid="icon_add" src={icon} className={`${styles.icon_add}`} />}
    </button>
  );
}

export default SecundaryButton;
