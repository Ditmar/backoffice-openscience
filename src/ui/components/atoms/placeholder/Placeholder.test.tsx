import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Placeholder from './Placeholder';

describe('Placeholder', () => {
  it('calls the onChange function when text is entered', () => {
    let inputText = '';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      inputText = event.target.value;
    };

    const { getByPlaceholderText } = render(
      <Placeholder placeholder="Placeholder text" onChange={onChange} />,
    );

    const input = getByPlaceholderText('Placeholder text');
    fireEvent.change(input, { target: { value: 'Test input' } });

    expect(inputText).toBe('Test input');
  });
});
