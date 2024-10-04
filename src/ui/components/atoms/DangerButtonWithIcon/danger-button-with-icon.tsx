import './danger-button-with-icon.scss';
import type { IProps } from './types/IProps';

function DangerButtonWithIcon(props: IProps) {
  const { children, variant, onClick, icon } = props;

  return (
    <button
      className={`danger-button danger-button--${variant}`}
      onClick={onClick}
      disabled={variant === 'disable'}
    >
      <span className="danger-button__text">{children}</span>
      {icon && <span className="danger-button__icon">{icon}</span>}{' '}
      {/* Se usa el string como ícono */}
    </button>
  );
}

export default DangerButtonWithIcon;
