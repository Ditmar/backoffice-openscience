import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import UserForm from './UserForm';

describe('UserForm Component', () => {
  test('renders all input fields with correct labels and placeholders', () => {
    render(<UserForm />);

    const fields = [
      { placeholder: 'Username' },
      { placeholder: 'Email' },
      { placeholder: 'Password' },
      { placeholder: 'Role' },
    ];

    fields.forEach(({ placeholder }) => {
      const input = screen.getByPlaceholderText(placeholder);
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('placeholder', placeholder);
    });
  });

  test('calls onSearchClick when the submit button is clicked', async () => {
    const handleClick = vi.fn();
    render(<UserForm onSearchClick={handleClick} />);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(submitButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
