import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormFields from './FormFields';
import type { FormFieldsProps } from './FormFields';

describe('FormFields', () => {
  const defaultProps: FormFieldsProps = {
    placeholder: 'Enter text here',
  };

  it('renders all form fields correctly', () => {
    render(<FormFields placeholder={defaultProps.placeholder} />);

    const labels: string[] = [
      'Full name',
      'InstitutionalAffiliation',
      'ORCID',
      'CopyrightRegistration',
      'Articles',
      'Email',
    ];

    labels.forEach((label) => {
      const element = screen.queryByLabelText(label);
      expect(element).not.toBeNull();
      if (element) {
        expect(element).toBeInTheDocument();
      }
    });
  });

  it('renders input elements with the correct placeholder', () => {
    render(<FormFields placeholder={defaultProps.placeholder} />);

    const inputs = screen.getAllByPlaceholderText(defaultProps.placeholder);
    expect(inputs.length).toBe(6);
  });

  it('allows text input in fields', () => {
    render(<FormFields placeholder={defaultProps.placeholder} />);

    const input = screen.getByLabelText('Full name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'John Doe' } });

    expect(input.value).toBe('John Doe');
  });
});
