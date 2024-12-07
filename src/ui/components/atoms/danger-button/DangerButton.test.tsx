import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import DangerButton from './DangerButton';

describe('Testing DangerButton React Component', () => {
  it('should render with variant "danger-primary"', () => {
    const { getByText } = render(<DangerButton variant="danger-primary">+</DangerButton>);
    const buttonText = getByText('+');
    expect(buttonText).toBeDefined();
  });

  it('should render with variant "danger-secondary"', () => {
    const { getByText } = render(<DangerButton variant="danger-secondary">+</DangerButton>);
    const buttonText = getByText('+');
    expect(buttonText).toBeDefined();
  });

  it('should render with variant "danger-tertiary"', () => {
    const { getByText } = render(<DangerButton variant="danger-tertiary">+</DangerButton>);
    const buttonText = getByText('+');
    expect(buttonText).toBeDefined();
  });

  it('should render with variant "danger-disabled" and be disabled', () => {
    const { getByText } = render(<DangerButton variant="danger-disabled">+</DangerButton>);
    const buttonText = getByText('+');
    expect(buttonText).toBeDefined();

    const buttonElement = buttonText.closest('button');
    expect(buttonElement).not.toBeNull();
    expect(buttonElement?.disabled).toBe(true); // Manually check if the button is disabled
  });
});
