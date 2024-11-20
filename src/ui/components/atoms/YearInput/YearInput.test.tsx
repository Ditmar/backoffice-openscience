import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import YearInput from './YearInput';

describe('YearInput', () => {
  it('calls the onChange function when text is entered', () => {
    let yearInput = '';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      yearInput = event.target.value;
    };

    const { getByPlaceholderText } = render(
      <YearInput placeholder="placeholder text" onChange={onChange} />,
    );

    const input = getByPlaceholderText('placeholder text');
    fireEvent.change(input, { target: { value: '2024' } });

    expect(yearInput).toBe('2024');
  });
});
