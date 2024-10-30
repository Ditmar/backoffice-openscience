import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('calls onChange when typing in the input field', () => {
    let inputValue = '';
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      inputValue = event.target.value;
    };

    const { getByPlaceholderText } = render(
      <SearchBar placeholder="Search" onChange={handleChange} />,
    );
    const input = getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Test' } });

    expect(inputValue).toBe('Test');
  });

  it('calls onSearchClick when the search icon is clicked', () => {
    let clicked = false;
    const handleSearchClick = () => {
      clicked = true;
    };

    const { getByRole } = render(
      <SearchBar placeholder="Search" onChange={() => {}} onSearchClick={handleSearchClick} />,
    );
    const button = getByRole('button');
    fireEvent.click(button);

    expect(clicked).toBe(true);
  });
});
