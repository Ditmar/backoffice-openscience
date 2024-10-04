import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DangerButtonWithIcon from './danger-button-with-icon';

describe('DangerButtonWithIcon', () => {
  it('renders correctly', () => {
    render(
      <DangerButtonWithIcon variant="Enabled" icon="+">
        Danger Button
      </DangerButtonWithIcon>,
    );
    expect(screen.getByText('Danger Button')).toBeInTheDocument();
  });

  it('handles click', () => {
    const handleClick = vi.fn();
    render(
      <DangerButtonWithIcon variant="Enabled" icon="+" onClick={handleClick}>
        Danger Button
      </DangerButtonWithIcon>,
    );
    fireEvent.click(screen.getByText('Danger Button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when variant is Disable', () => {
    render(
      <DangerButtonWithIcon variant="Disable" icon="+">
        Danger Button
      </DangerButtonWithIcon>,
    );
    const button = screen.getByText('Danger Button').closest('button');
    expect(button).toBeDisabled();
  });
});
