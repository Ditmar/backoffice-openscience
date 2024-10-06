import classNames from 'classnames';
import './GhostButtonWithIcon.scss';
import type { GhostProps } from './types/types';

function GhostButtonWithIcon({ size = 'medium', disabled = false, onClick }: GhostProps) {
  const sizeClass = `btn--${size}`;

  return (
    <div className="btn-container">
      <button
        className={classNames('btn-main', sizeClass, { 'btn--disabled': disabled })}
        onClick={onClick}
        disabled={disabled}
        aria-label="add-icon"
      >
        <span className="btn-text">Ghost button</span>
        <span className="btn-icon-square">+</span>
      </button>
    </div>
  );
}

export default GhostButtonWithIcon;
