import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import UserForm from './UserForm';

describe('UserForm', () => {
  it('should submit the form with correct data', () => {
    const handleSubmit = vi.fn();
    const { getByLabelText, getByText } = render(<UserForm onSubmit={handleSubmit} />);

    fireEvent.change(getByLabelText(/username/i), { target: { value: 'JohnDoe' } });
    fireEvent.change(getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.change(getByLabelText(/role/i), { target: { value: 'admin' } });

    fireEvent.click(getByText(/submit/i));

    expect(handleSubmit).toHaveBeenCalledWith({
      username: 'JohnDoe',
      email: 'john@example.com',
      password: 'password123',
      role: 'admin',
    });
  });
});
