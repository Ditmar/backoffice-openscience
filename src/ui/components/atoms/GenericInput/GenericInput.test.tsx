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

  it('opens the dropdown and selects an option when clicked', () => {
    const { getByTestId, getByText } = render(
      <GenericInput
        placeholder="Placeholder text"
        onChange={() => {}}
        icon="icon.svg"
        options={['option1', 'option2', 'option3', 'option4', 'option5']}
      />,
    );
    const iconButton = getByTestId('icon');
    fireEvent.click(iconButton);

    const option1 = getByText('option1');
    const option2 = getByText('option2');
    const option3 = getByText('option3');
    const option4 = getByText('option4');
    const option5 = getByText('option5');

    expect(option1).not.toBeNull();
    expect(option2).not.toBeNull();
    expect(option3).not.toBeNull();
    expect(option4).not.toBeNull();
    expect(option5).not.toBeNull();

    fireEvent.click(option1);

    const dropdown = document.querySelector('.generic-input__dropdown');
    expect(dropdown).toBeNull();
  });
});
