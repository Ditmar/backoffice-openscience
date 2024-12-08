import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Form from './GalleryForm';
import '@testing-library/jest-dom';

describe('GalleryForm', () => {
  it('renders all fields with correct placeholders', () => {
    render(<Form onInputChange={() => {}} />);

    const placeholders = [
      'Enter title',
      'Enter article',
      'Enter description',
      'Enter source',
      'Enter legend',
    ];

    placeholders.forEach((placeholder) => {
      expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });
  });

  it('calls onInputChange when a field value changes', async () => {
    const mockOnInputChange = vi.fn();
    render(<Form onInputChange={mockOnInputChange} />);

    const titleInput = screen.getByPlaceholderText('Enter title');
    await userEvent.type(titleInput, 'Hello');

    const actualCalls = mockOnInputChange.mock.calls.length;
    expect(actualCalls).toBe(5);

    const { calls } = mockOnInputChange.mock;
    expect(calls).toEqual([
      ['title', 'H'],
      ['title', 'He'],
      ['title', 'Hel'],
      ['title', 'Hell'],
      ['title', 'Hello'],
    ]);

    expect(mockOnInputChange).toHaveBeenLastCalledWith('title', 'Hello');
  });

  it('calls onInputChange with an empty string when a field is cleared', async () => {
    const mockOnInputChange = vi.fn();
    render(<Form onInputChange={mockOnInputChange} />);

    const sourceInput = screen.getByPlaceholderText('Enter source');
    await userEvent.type(sourceInput, 'Clear me');
    await userEvent.clear(sourceInput);

    expect(mockOnInputChange).toHaveBeenCalledTimes(9);
    expect(mockOnInputChange).toHaveBeenLastCalledWith('source', '');
  });
});
