import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './InputField';

test('renders InputField with label and placeholder', () => {
  render(<InputField label="Email" placeholder="Enter email" value="" onChange={() => {}} />);
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument();
});

test('shows error message when error prop is provided', () => {
  render(<InputField label="Email" error="This field is required" value="" onChange={() => {}} />);
  expect(screen.getByText(/this field is required/i)).toBeInTheDocument();
});

test('calls onChange handler when input value changes', () => {
  const handleChange = jest.fn();
  render(<InputField label="Email" value="" onChange={handleChange} />);
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test' } });
  expect(handleChange).toHaveBeenCalledWith(expect.anything());
});

test('renders icon when icon prop is provided', () => {
  const { container } = render(
    <InputField
      label="Email"
      placeholder="Enter email"
      value=""
      onChange={() => {}}
      icon={<FiMail />}
    />
  );
  expect(container.querySelector('.input-field__icon')).toBeInTheDocument();
});
