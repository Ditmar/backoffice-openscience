import classNames from 'classnames';
import styles from './Danger-Button.scss';
import type { IProps } from './types/IProps';

function DangerButton(props: IProps) {
  const { children, variant, onClick} = props;
  const displayClass = classNames(styles.display, {
    [styles.primary]: variant === 'Small',
    [styles.secondary]: variant === 'Medium',
    [styles.tertiary]: variant === 'Big',
    [styles.active]: variant === 'Active',
    [styles.disable]: variant === 'Disable',
  });
  return (
    <button className={displayClass} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
}

export default DangerButton;