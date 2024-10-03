import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Toggle from './Toggle';
import '@testing-library/jest-dom';

describe('Toggle Component', () => {
  it('renders with label', () => {
    render(<Toggle label="Test Toggle" />);
    expect(screen.getByText('Test Toggle')).toBeInTheDocument();
  });

  it('toggle on click', () => {
    render(<Toggle label="Test Toggle" />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('is disabled when disabled is true', () => {
    render(<Toggle label="Test Toggle" disabled />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
