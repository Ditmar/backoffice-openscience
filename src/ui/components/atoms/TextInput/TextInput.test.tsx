import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import TextInput from './TextInput';

const handlePlaceholderChange = () => {};
const handleSizeChange = () => {};
const handleHoverChange = () => {};
const handleChange = () => {};
describe('TextInput component', () => {
  it('renders with placeholder text', () => {
    render(<TextInput placeholder="Placeholder text" onChange={handlePlaceholderChange} />);
  });
  it('applies the correct class for the small size', () => {
    render(<TextInput placeholder="Small input" size="small" onChange={handleSizeChange} />);
    const input = screen.getByPlaceholderText('Small input');
    expect(input.className).toContain('small');
  });
  it('applies the correct class for the medium size', () => {
    render(<TextInput placeholder="Medium input" size="medium" onChange={handleSizeChange} />);
    const input = screen.getByPlaceholderText('Medium input');
    expect(input.className).toContain('medium');
  });
  it('applies the correct class for the large size', () => {
    render(<TextInput placeholder="Large input" size="large" onChange={handleSizeChange} />);
    const input = screen.getByPlaceholderText('Large input');
    expect(input.className).toContain('large');
  });
  it('applies hover class correctly', async () => {
    const user = userEvent.setup();
    render(<TextInput placeholder="Hover input" onChange={handleHoverChange} />);
    const input = screen.getByPlaceholderText('Hover input');
    await user.hover(input);
    expect(input.className).toMatch(/input__field/);
  });
  it('updates value on input', () => {
    render(<TextInput placeholder="Type something" onChange={handleChange} />);
    const input = screen.getByPlaceholderText('Type something');
    fireEvent.change(input, { target: { value: 'New value' } });
    expect(input).toHaveValue('New value');
  });
});
