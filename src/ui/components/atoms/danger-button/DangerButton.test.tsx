import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import DangerButton from './DangerButton';

describe('Testing DangerButton React Component', () => {
  it('should render test 1', () => {
    const { getByText } = render(<DangerButton variant="danger-primary">+</DangerButton>);
    const buttonText = getByText('+');
    expect(buttonText).toBeDefined();
  });

  it('should render test 2', () => {
    const { getByText } = render(<DangerButton variant="danger-secondary">+</DangerButton>);
    const buttonText = getByText('+');
    expect(buttonText).toBeDefined();
  });

  it('should render test 3', () => {
    const { getByText } = render(<DangerButton variant="danger-tertiary">+</DangerButton>);
    const buttonText = getByText('+');
    expect(buttonText).toBeDefined();
  });

  it('should render test 4', () => {
    const { getByText } = render(<DangerButton variant="danger-disabled">+</DangerButton>);
    const buttonText = getByText('+');
    expect(buttonText).toBeDefined();
  });
});
