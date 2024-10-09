import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Checkbox from './checkbox';
import '@testing-library/jest-dom';

describe('Checkbox Component', () => {
  it('Should render the checkbox component', () => {
    render(<Checkbox id="checkbox-1" label="checkbox item" checked={false} />);
    const checkbox = screen.getByLabelText('checkbox item');
    expect(checkbox).toBeInTheDocument();
  });

  it('Should toggle checkbox when clicked', () => {
    render(<Checkbox id="checkbox-2" label="checkbox item" />);
    const checkbox = screen.getByLabelText('checkbox item');
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('Should not toggle checkbox when disabled', () => {
    render(<Checkbox id="checkbox-3" label="Disabled checkbox" disabled />);
    const checkbox = screen.getByLabelText('Disabled checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('Should autofocus the checkbox', async () => {
    render(<Checkbox id="checkbox-4" label="Auto-focus checkbox" autoFocus />);
    const checkbox = screen.getByLabelText('Auto-focus checkbox');

    await waitFor(() => {
      expect(checkbox).toHaveFocus();
    });
  });
});
