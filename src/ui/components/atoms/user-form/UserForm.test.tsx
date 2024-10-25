import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import UserForm from './UserForm';

describe('UserForm', () => {
  it('should submit the form with correct data', () => {
    const handleSubmit = vi.fn();
    const { getByPlaceholderText, getByText } = render(<UserForm onSubmit={handleSubmit} />);

    fireEvent.change(getByPlaceholderText(/Enter your username/i), {
      target: { value: 'JohnDoe' },
    });
    fireEvent.change(getByPlaceholderText(/Enter your email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(getByPlaceholderText(/Enter your password/i), {
      target: { value: 'password123' },
    });
    fireEvent.change(getByPlaceholderText(/Enter your role/i), { target: { value: 'admin' } });

    fireEvent.click(getByText(/submit/i));

    expect(handleSubmit).toHaveBeenCalledWith({
      username: 'JohnDoe',
      email: 'john@example.com',
      password: 'password123',
      role: 'admin',
    });
  });
});
