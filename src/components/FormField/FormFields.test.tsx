import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormFields from './FormFields';
import type { FormFieldsProps } from './FormFields';

const defaultProps: FormFieldsProps = {
  placeholder: 'Enter text here',
};

describe('FormFields Component', () => {
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
      const element: HTMLElement = screen.getByLabelText(label);
      expect(element).toBeInTheDocument();
    });
  });

  it('renders input elements with the correct placeholder', () => {
    render(<FormFields placeholder={defaultProps.placeholder} />);

    const inputs: HTMLElement[] = screen.getAllByPlaceholderText(defaultProps.placeholder);
    expect(inputs).toHaveLength(6);
  });

  it('allows text input in fields', () => {
    render(<FormFields placeholder={defaultProps.placeholder} />);

    const input = screen.getByLabelText('Full name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'John Doe' } });

    expect(input.value).toBe('John Doe');
  });
});
