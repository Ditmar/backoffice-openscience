import classNames from 'classnames';
import { useState } from 'react';
import styles from './GhostButtonWithIcon.scss';
import type { IGhostButtonWithIconProps } from './types/IGhostButtonWithIconProps.ts';

function GhostButtonWithIcon ({
  size = 'medium',
  disabled = false,
  onClick,
  
}: IGhostButtonWithIconProps) {
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
        aria-label='add-icon'
      >
        <span className="btn-text">Ghosth icon</span>
        <span className="btn-icon-square">+</span>
      </button>
    </div>
  );
}

export default GhostButtonWithIcon;