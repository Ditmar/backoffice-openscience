import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormFields from './FormFields';

describe('FormFields', () => {
  const defaultProps: { placeholder: string } = {
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

    labels.forEach((label: string) => {
      const element = screen.queryByLabelText(label);

      if (element instanceof HTMLElement) {
        expect(element).notToBeNull();
      } else {
        throw new Error(`El elemento con la etiqueta ${label} no fue encontrado.`);
      }
    });
  });

  it('renders input elements with the correct placeholder', () => {
    render(<FormFields placeholder="Enter text here" />);

    const inputs = screen.getAllByPlaceholderText('Enter text here');
    expect(inputs).toBeDefined();
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('allows text input in fields', () => {
    render(<FormFields placeholder="Enter text here" />);

    const input = screen.getByLabelText('Full name');

    expect(input).toBeInstanceOf(HTMLInputElement);

    if (input instanceof HTMLInputElement) {
      fireEvent.change(input, { target: { value: 'John Doe' } });
      expect(input.value).toBe('John Doe');
    } else {
      throw new Error('El elemento no es un HTMLInputElement');
    }
  });
});
