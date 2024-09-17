// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Para los matchers adicionales de Jest
import Button from './button'; // Asegúrate de que la ruta sea correcta
import { describe, expect, test, vi } from 'vitest'; // Asegúrate de importar vi de vitest

describe('Button component', () => {
  test('renders with label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('renders with background color', () => {
    render(<Button label="Click me" backgroundColor="#ff0000" />);
    expect(screen.getByText('Click me')).toHaveStyle('background-color: #ff0000');
  });

  test('renders with text color', () => {
    render(<Button label="Click me" color="#00ff00" />);
    expect(screen.getByText('Click me')).toHaveStyle('color: #00ff00');
  });

  test('renders with border radius', () => {
    render(<Button label="Click me" borderRadius="10px" />);
    expect(screen.getByText('Click me')).toHaveStyle('border-radius: 10px');
  });

  test('renders with icon', () => {
    render(<Button label="Click me" icon={<span>+</span>} />);
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  test('handles click events', () => {
    const handleClick = vi.fn(); // Use vi.fn() en lugar de jest.fn()
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
