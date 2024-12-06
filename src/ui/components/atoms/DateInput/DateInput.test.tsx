import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import DateInput from './DateInput';

describe('DateInput', () => {
  it('calls the onChange function when text is entered', () => {
    let dateInput = '';
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      dateInput = event.target.value;
    };

    const { getByPlaceholderText } = render(
      <DateInput placeholder="Select a date" onChange={onChange} />,
    );

    const input = getByPlaceholderText('Select a date');
    fireEvent.change(input, { target: { value: '2024-11-14' } });

    expect(dateInput).toBe('2024-11-14');
  });
});
