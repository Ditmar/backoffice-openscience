import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import SecondaryButtonIcon from './SecondaryButtonIcon';

describe('SecondaryButtonIcon Component', () => {
  test('renders correctly with small size', () => {
    render(<SecondaryButtonIcon size="small" />);
    const button = screen.getByRole('button');

    expect(button.classList.contains('btn--small')).toBe(true);
  });

  test('shows "Add" tooltip on hover', async () => {
    render(<SecondaryButtonIcon size="medium" />);
    const button = screen.getByRole('button');

    expect(screen.queryByText('Add')).toBeNull();

    await userEvent.hover(button);

    const tooltip = screen.queryByText('Add');
    expect(tooltip).not.toBeNull();

    await userEvent.unhover(button);

    expect(screen.queryByText('Add')).toBeNull();
  });

  test('does not show tooltip when disabled', async () => {
    render(<SecondaryButtonIcon size="medium" disabled />);
    const button = screen.getByRole('button');

    await userEvent.hover(button);

    expect(screen.queryByText('Add')).toBeNull();
  });

  test('shows focus outline when focused', async () => {
    render(<SecondaryButtonIcon size="medium" />);
    const button = screen.getByRole('button');

    button.style.outline = '2px solid';

    await userEvent.tab();

    expect(document.activeElement).toBe(button);

    const style = getComputedStyle(button);
    expect(style.outline).toContain('solid');
  });
});
