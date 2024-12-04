import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import ButtonNewEntryBibliographies from './ButtonNewEntryBibliographies';
import '@testing-library/jest-dom';

describe('ButtonNewEntryBibliographies', () => {
  it('renders all fields with correct placeholders', () => {
    render(<ButtonNewEntryBibliographies onChange={() => {}} />);
    const fields = [
      { label: 'Public Type', placeholder: 'Enter publication type' },
      { label: 'Author Last Name', placeholder: 'Enter author name' },
    ];

    fields.forEach(({ label, placeholder }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });
  });

  it('calls onChange when a field value is changed', async () => {
    const onChangeMock = vi.fn();
    render(<ButtonNewEntryBibliographies onChange={onChangeMock} />);

    const input = screen.getByPlaceholderText('Enter publication year');

    await userEvent.type(input, 'article');

    expect(onChangeMock).toHaveBeenCalledTimes(4);
  });
});
