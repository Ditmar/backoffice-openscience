import classNames from 'classnames';
import { useState, useCallback } from 'react';
import type { SecondaryButtonProps } from './types/SecondaryButtonProps';
import './SecondaryButton.scss';

function SecondaryButton({
  size = 'medium',
  disabled = false,
  onClick,
  active = false,
  focused = false,
  hovered = false,
}: SecondaryButtonProps) {
  const [isHovered, setIsHovered] = useState(hovered);
  const [isFocused, setIsFocused] = useState(focused);

  const buttonClass = classNames('btn-secondary', `btn--${size}`, {
    'btn--disabled': disabled,
    'btn--active': active,
    'btn--hovered': isHovered,
    'btn--focused': isFocused,
  });

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      aria-pressed={active}
    >
      <span>Secondary button</span>
    </button>
  );
}

export default SecondaryButton;
