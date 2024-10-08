import classNames from 'classnames';
import type { IProps } from './types/IProps';
import styles from './Danger-Button.module.scss';

function DangerButton(props: IProps) {
  const { children, variant, onClick } = props;

  const isDisabled = variant === 'Disable';

  const displayClass = classNames(styles.display, {
    [styles.primary]: variant === 'Small',
    [styles.secondary]: variant === 'Medium',
    [styles.tertiary]: variant === 'Big',
    [styles.active]: variant === 'Active',
    [styles.disable]: isDisabled,
  });
  return (
    <button
      className={displayClass}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
    >
      <span className="variable-button__text">{children}</span>
    </button>
  );
}

export default DangerButton;
