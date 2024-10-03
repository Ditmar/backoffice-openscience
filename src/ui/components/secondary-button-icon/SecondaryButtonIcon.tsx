import './SecondaryButtonIcon.scss';
import { useState } from 'react';
import type { MouseEventHandler } from 'react';
import classNames from 'classnames';
import type { ISecondaryButtonIconProps } from './types/ISecondaryButtonIconProps';

function SecondaryButtonIcon({
  size = 'medium',
  disabled = false,
  onClick,
}: ISecondaryButtonIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClass = classNames('btn-main', {
    [`btn--${size}`]: size,
    'btn--disabled': disabled,
  });

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = () => {
    setIsHovered(true);
  };
  const handleMouseLeave: MouseEventHandler<HTMLButtonElement> = () => {
    setIsHovered(false);
  };

  return (
    <div className="btn-container">
      <button
        className={buttonClass}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        disabled={disabled}
        aria-label="add-icon"
        tabIndex={0}
      >
        <span className="btn-icon">+</span>
      </button>
      {isHovered && !disabled && <div className="tooltip">Add</div>}
    </div>
  );
}

export default SecondaryButtonIcon;
