import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import SecondaryButton from './SecondaryButton';
import '@testing-library/jest-dom';

describe('SecondaryButton Component', () => {
  test('renders correctly with medium size', () => {
    render(<SecondaryButton size="medium" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn--medium');
  });

  test('renders correctly in disabled state', () => {
    render(<SecondaryButton size="medium" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('btn--disabled');
  });

  test('applies hovered class when hovered', () => {
    render(<SecondaryButton size="medium" />);
    const button = screen.getByRole('button');

    // simular el evento de hover
    expect(button).not.toHaveClass('btn--hovered');
    fireEvent.mouseOver(button);
    expect(button).toHaveClass('btn--hovered');
    fireEvent.mouseOut(button); /// Simula el evento para dejar de hacer hover
    expect(button).not.toHaveClass('btn--hovered');
  });

  test('applies active class when active prop is true', () => {
    render(<SecondaryButton size="medium" active />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn--active');
  });

  test('does not show tooltip when disabled', () => {
    render(<SecondaryButton size="medium" disabled />);
    const button = screen.getByRole('button');

    fireEvent.mouseOver(button); /// Simular hover en el botón deshabilitado
    expect(screen.queryByText('Tooltip text')).toBeNull();
  });
});
