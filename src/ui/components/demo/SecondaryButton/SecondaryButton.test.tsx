import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('applies hovered class when hovered', async () => {
    render(<SecondaryButton size="medium" />);
    const button = screen.getByRole('button');

    expect(button).not.toHaveClass('btn--hovered');
    await userEvent.hover(button);
    expect(button).toHaveClass('btn--hovered');
    await userEvent.unhover(button);
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

    userEvent.hover(button);
    expect(screen.queryByText('Tooltip text')).toBeNull(); 
  });
});
