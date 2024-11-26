import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Form from './bibliograpyform';

const mockFields = [
  { id: 'public', name: 'Public Type', placeholder: 'Enter public type', onChange: vi.fn() },
  {
    id: 'lastname',
    name: 'authorlast Name',
    placeholder: 'Enter author last name',
    onChange: vi.fn(),
  },
  {
    id: 'initials',
    name: 'autorInitials',
    placeholder: 'Enter author initials',
    onChange: vi.fn(),
  },
  { id: 'title', name: 'publication Title', placeholder: 'Enter title', onChange: vi.fn() },
];

describe('Form component', () => {
  it('should render the form with the provided fields', () => {
    render(<Form fields={mockFields} />);

    mockFields.forEach((field) => {
      expect(screen.getByPlaceholderText(field.placeholder)).toBeInTheDocument();
    });
  });

  it('should call onChange when input values change', () => {
    render(<Form fields={mockFields} />);

    const nameInput = screen.getByPlaceholderText('Enter public type');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    expect(mockFields[0].onChange).toHaveBeenCalled();
  });

  it('should render correct number of input fields', () => {
    render(<Form fields={mockFields} />);

    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(mockFields.length);
  });
});
