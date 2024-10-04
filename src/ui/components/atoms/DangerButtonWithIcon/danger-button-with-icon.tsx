import './danger-button-with-icon.scss';
import type { IProps } from './types/IProps';

function DangerButtonWithIcon(props: IProps) {
  const { children, variant, onClick, icon } = props;

  return (
    <button
      className={`Danger-button Danger-button--${variant}`}
      onClick={onClick}
      disabled={variant === 'Disable'}
    >
      <span className="Danger-button__text">{children}</span>
      {icon && <span className="Danger-button__icon">{icon}</span>}{' '}
      {/* Se usa el string como ícono */}
    </button>
  );
}

export default DangerButtonWithIcon;
