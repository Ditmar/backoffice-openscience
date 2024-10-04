import './Secondary-Button.scss';
import type { IProps } from './types/IProps';

function SecondaryButton({ label, size, variant, state, onClick, icon }: IProps) {
  const buttonClasses = `button button--${variant} button--${size} button--${state}`;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={state === 'enabled'}>
      <span className="button__label">{label}</span>
      {icon && <span className="button__icon">{icon}</span>}
    </button>
  );
}

export default SecondaryButton;
