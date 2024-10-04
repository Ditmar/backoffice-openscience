import { useState } from 'react';
import './GhostButtonWithIcon.scss';
import type { GhostProps } from './types/types';

function GhostButtonWithIcon({
  size = 'medium',
  disabled = false,
  onClick,
}: GhostProps) {
  const [isHovered, setIsHovered] = useState(false);
  const sizeClass = `btn--${size}`;
  const disabledClass = disabled ? 'btn--disabled' : '';
  return (
    <div className="btn-container">
      <button
        className={`btn-main ${sizeClass} ${disabledClass}`}
        onClick={onClick}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        disabled={disabled}
        aria-label="add-icon"
      >
        <span className="btn-text">Ghosth icon</span>
        <span className="btn-icon-square">+</span>
      </button>
    </div>
  );
}

export default GhostButtonWithIcon;
