import './SecondaryButtonIcon.scss';
import { useState } from 'react';
import type { ISecondaryButtonIconProps } from './types/ISecondaryButtonIconProps';

function SecondaryButtonIcon({
  size = 'medium',
  disabled = false,
  onClick,
}: ISecondaryButtonIconProps) {
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
        <span className="btn-icon">+</span>
      </button>
      {isHovered && !disabled && <div className="tooltip">Add</div>}
    </div>
  );
}

export default SecondaryButtonIcon;
