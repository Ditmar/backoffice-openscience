import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TopElements from './TopElements';

describe('TopElements', () => {
  it('calls onChange when typing in the input field', () => {
    let inputValue = '';
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      inputValue = event.target.value;
    };

    const { getByPlaceholderText } = render(
      <TopElements placeholder="Publish" onChange={handleChange} variant="primary" />,
    );
    const input = getByPlaceholderText('Publish');
    fireEvent.change(input, { target: { value: 'Test' } });

    expect(inputValue).toBe('Test');
  });

  it('renders the primary button', () => {
    const { getByText } = render(
      <TopElements placeholder="Publish" onChange={() => {}} variant="primary" />,
    );
    const button = getByText('Publish');
    expect(button).toBeTruthy();
  });
});
