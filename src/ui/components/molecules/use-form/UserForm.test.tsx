import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UserForm from './UserForm';

describe('UserForm Component', () => {
  it('renders all form fields with correct placeholders', () => {
    render(<UserForm onChange={() => {}} label="Test Label" />);

    // Verificar que todos los campos tienen sus placeholders
    expect(screen.getByPlaceholderText('Enter your username')).not.toBeNull();
    expect(screen.getByPlaceholderText('Enter your email')).not.toBeNull();
    expect(screen.getByPlaceholderText('Enter your password')).not.toBeNull();
    expect(screen.getByPlaceholderText('Enter your role')).not.toBeNull();
  });

  it('allows user to input values in the fields', () => {
    render(<UserForm onChange={() => {}} label="Test Label" />);

    const usernameInput = screen.getByPlaceholderText('Enter your username');
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    const roleInput = screen.getByPlaceholderText('Enter your role');

    // Simular ingreso de texto en los campos
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'securepassword' } });
    fireEvent.change(roleInput, { target: { value: 'admin' } });

    // Verificar los valores ingresados
    expect((usernameInput as HTMLInputElement).value).toBe('testuser');
    expect((emailInput as HTMLInputElement).value).toBe('testuser@example.com');
    expect((passwordInput as HTMLInputElement).value).toBe('securepassword');
    expect((roleInput as HTMLInputElement).value).toBe('admin');
  });
});
