import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TextInput from './TitleInput';

describe('TitleInput', () => {
  it('calls the onChange function when text is entered', () => {
    let textInput = '';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      textInput = event.target.value;
    };

    const { getByPlaceholderText } = render(
      <TextInput placeholder="placeholder text" onChange={onChange} />,
    );

    const input = getByPlaceholderText('placeholder text');
    fireEvent.change(input, { target: { value: 'Test input' } });

    expect(textInput).toBe('Test input');
  });
});
