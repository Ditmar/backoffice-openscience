import classNames from 'classnames';
import type { IProps } from './types/IProps';
import styles from './Danger-Button.module.scss';

function DangerButton(props: IProps) {
  const { children, variant = 'Normal', onClick, disabled } = props;

  return (
    <button
      className={`variable-button variable-button--${variant}`}
      onClick={onClick}
      disabled={disabled ?? variant === 'Disable'}
    >
      <span className="variable-button__text">{children}</span>
    </button>
  );
}

export default DangerButton;
