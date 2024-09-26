import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';
import '@testing-library/jest-dom';

describe('Checkbox Component', () => {
  it('Should render the checkbox component', () => {
    render(<Checkbox id="checkbox-1" label="Checkbox item" checked={false} />);
    const checkbox = screen.getByLabelText('Checkbox item');
    expect(checkbox).toBeInTheDocument();
  });

  it('Should toggle checkbox when clicked', () => {
    render(<Checkbox id="checkbox-2" label="Checkbox item" />);
    const checkbox = screen.getByLabelText('Checkbox item');
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

  it('Should autofocus the checkbox', () => {
    render(<Checkbox id="checkbox-4" label="Auto-focus checkbox" autoFocus />);
    const checkbox = screen.getByLabelText('Auto-focus checkbox');
    expect(checkbox).toHaveFocus();
  });
});
