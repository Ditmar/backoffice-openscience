import { useState } from 'react';
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
  const sizeClass = `btn--${size}`;
  const disabledClass = disabled ? 'btn--disabled' : '';
  const activeClass = active ? 'btn--active' : '';
  const focusedClass = isFocused ? 'btn--focused' : '';
  const hoveredClass = isHovered ? 'btn--hovered' : '';

  return (
    <button
      className={`btn-secondary ${sizeClass} ${disabledClass} ${activeClass} ${hoveredClass} ${focusedClass}`}
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onFocus={() => {
        setIsFocused(true);
      }} // Establecer isFocused en true al recibir foco
      onBlur={() => {
        setIsFocused(false);
      }} // Restablecer isFocused en false al perder foco
      disabled={disabled}
      aria-pressed={active}
    >
      <span>Secondary button</span>
    </button>
  );
}
export default SecondaryButton;
