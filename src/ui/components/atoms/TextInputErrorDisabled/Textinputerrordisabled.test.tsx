// TextInputErrorDisabled.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

import TextInputErrorDisabled from './Textinputerrordisabled';

describe('TextInputErrorDisabled Component', () => {
  it('renders the input with the correct placeholder', () => {
    render(<TextInputErrorDisabled placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  it('displays the error message when provided', () => {
    render(<TextInputErrorDisabled errorMessage="This field is required." />);
    const errorMessage = screen.getByText(/This field is required./i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('disables the input when isDisabled is true', () => {
    render(<TextInputErrorDisabled isDisabled={true} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeDisabled();
  });

  it('does not display an error message when errorMessage is not provided', () => {
    render(<TextInputErrorDisabled />);
    const errorMessage = screen.queryByText(/This field is required./i);
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('allows user to type when not disabled', async () => {
    render(<TextInputErrorDisabled isDisabled={false} placeholder="Type here" />);
    const inputElement = screen.getByPlaceholderText('Type here');
    
    await userEvent.type(inputElement, 'Test input');
    
    expect(inputElement).toHaveValue('Test input');
  });

  it('does not allow user to type when disabled', async () => {
    render(<TextInputErrorDisabled isDisabled={true} placeholder="Type here" />);
    const inputElement = screen.getByPlaceholderText('Type here');

    await userEvent.type(inputElement, 'Test input');
    
    expect(inputElement).toHaveValue(''); // Should remain empty as input is disabled
  });
});
