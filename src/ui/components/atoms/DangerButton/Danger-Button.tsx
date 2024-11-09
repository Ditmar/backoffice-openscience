import './Danger-Button.scss';
import type { IProps } from './types/IProps';

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
