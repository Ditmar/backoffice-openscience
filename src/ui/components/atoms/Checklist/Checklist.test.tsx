import { describe, it, vi, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Checklist from './Checklist';

describe('Testing Checklist component', () => {
  const mockOnCheck = vi.fn();
  const items = ['Option 1', 'Option 2', 'Option 3'];

  it('Checklist renders correctly', () => {
    render(<Checklist items={items} onCheck={mockOnCheck} />);
    items.forEach((item) => {
      const option = screen.queryByText(item);
      expect(option !== null).toBe(true);
    });
  });

  it('Checklist applies custom className', () => {
    const customClass = 'custom-class';
    render(<Checklist items={items} onCheck={mockOnCheck} className={customClass} />);
    const checklist = screen.getByRole('combobox');
    expect(checklist.className.includes(customClass)).toBe(true);
  });

  it('Checklist triggers onCheck when an option is selected', () => {
    render(<Checklist items={items} onCheck={mockOnCheck} />);
    const checklist = screen.getByRole('combobox');

    fireEvent.change(checklist, { target: { value: 'Option 2' } });

    expect(mockOnCheck).toHaveBeenCalledTimes(1);
    expect(mockOnCheck).toHaveBeenCalledWith('Option 2');
  });

  it('Checklist has the correct number of options', () => {
    render(<Checklist items={items} onCheck={mockOnCheck} />);
    const options = screen.getAllByRole('option');
    expect(options.length).toBe(items.length);
    options.forEach((option, index) => {
      expect(option.textContent).toBe(items[index]);
    });
  });

  it('Checklist renders with an empty items list', () => {
    render(<Checklist items={[]} onCheck={mockOnCheck} />);
    const options = screen.queryAllByRole('option');
    expect(options.length).toBe(0);
  });
});
