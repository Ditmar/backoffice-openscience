import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormFields from './FormFields';
import type { FormFieldsProps } from './FormFields'; // Cambiado a type-only import

const defaultProps: FormFieldsProps = {
  placeholder: 'Enter text here',
};

describe('FormFields Component', () => {
  it('renders all form fields correctly', () => {
    render(<FormFields {...defaultProps} />);

    const labels = [
      'Full name',
      'InstitutionalAffiliation',
      'ORCID',
      'CopyrightRegistration',
      'Articles',
      'Email',
    ];

    labels.forEach((label) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });
  });

  it('renders input elements with the correct placeholder', () => {
    render(<FormFields {...defaultProps} />);

    const inputs = screen.getAllByPlaceholderText(defaultProps.placeholder);
    expect(inputs).toHaveLength(6);
  });

  it('allows text input in fields', () => {
    render(<FormFields {...defaultProps} />);

    const input = screen.getByLabelText('Full name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'John Doe' } });

    expect(input.value).toBe('John Doe');
  });
});
