import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import BibliographyForm from './bibliograpyform';
import '@testing-library/jest-dom';

describe('BibliographyForm', () => {
  it('renders all fields with correct placeholders', () => {
    render(<BibliographyForm onChange={() => {}} />);
    const fields = [
      { label: 'Public Type', placeholder: 'Enter publication type' },
      { label: 'Author Last Name', placeholder: 'Enter author name' },
      { label: 'Author Inititals', placeholder: 'Enter Author initials' },
      { label: 'Publication Title', placeholder: 'Enter title' },
      { label: 'Volume', placeholder: 'Enter volume' },
      { label: 'Edition Number', placeholder: 'Enter number' },
      { label: 'Pages', placeholder: 'Enter page' },
      { label: 'Edition Initilas', placeholder: 'Enter editor initials' },
      { label: 'Editor Last Name', placeholder: 'Enter last name editor' },
      { label: 'Publication Place', placeholder: 'Enter place' },
      { label: 'Editor', placeholder: 'Enter type' },
      { label: 'Electronic Address', placeholder: 'Enter Address' },
    ];

    fields.forEach(({ label, placeholder }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });
  });

  it('calls onChange when a field value is changed', async () => {
    const onChangeMock = vi.fn();
    render(<BibliographyForm onChange={onChangeMock} />);

    const input = screen.getByPlaceholderText('Enter publication type');

    await userEvent.type(input, 'Book');

    expect(onChangeMock).toHaveBeenCalledTimes(4);
  });
});
