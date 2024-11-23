import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GenericInput from './GenericInput';

describe('GenericInput', () => {
  it('calls the onChange function when text is entered', () => {
    let inputValue = '';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      inputValue = event.target.value;
    };

    const { getByPlaceholderText } = render(
      <GenericInput placeholder="Placeholder text" onChange={onChange} />,
    );

    const input = getByPlaceholderText('Placeholder text');
    fireEvent.change(input, { target: { value: 'Test Input' } });

    expect(inputValue).toBe('Test Input');
  });
});
