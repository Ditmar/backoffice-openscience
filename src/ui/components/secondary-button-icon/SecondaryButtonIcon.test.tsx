import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import SecondaryButtonIcon from './SecondaryButtonIcon';

describe('SecondaryButtonIcon Component', () => {
  test('renders correctly with small size', () => {
    render(<SecondaryButtonIcon size="small" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn--small');
  });

  test('shows "Add" tooltip on hover', async () => {
    render(<SecondaryButtonIcon size="medium" />);
    const button = screen.getByRole('button');

    expect(screen.queryByText('Add')).toBeNull();

    await userEvent.hover(button);

    expect(screen.getByText('Add')).toBeInTheDocument();

    await userEvent.unhover(button);

    expect(screen.queryByText('Add')).toBeNull();
  });

  test('does not show tooltip when disabled', async () => {
    render(<SecondaryButtonIcon size="medium" disabled />);
    const button = screen.getByRole('button');

    await userEvent.hover(button);

    expect(screen.queryByText('Añadir')).toBeNull();
  });

  test('shows focus outline when focused', async () => {
    render(<SecondaryButtonIcon size="medium" />);
    const button = screen.getByRole('button');

    await userEvent.tab();
    expect(button).toHaveFocus();
    expect(button).toHaveStyle('outline: 2px solid #0056b3');
  });
});
