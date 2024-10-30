import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import InputField from './InputField';

describe('InputField', () => {
  it('calls the onChange function when text is entered', () => {
    let inputText = '';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      inputText = event.target.value;
    };

    const { getByPlaceholderText } = render(<InputField placeholder="" onChange={onChange} />);

    const input = getByPlaceholderText('');
    fireEvent.change(input, { target: { value: 'Test input' } });

    expect(inputText).toBe('Test input');
  });
});
