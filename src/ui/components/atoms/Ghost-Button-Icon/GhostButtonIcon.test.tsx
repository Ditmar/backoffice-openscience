import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import GhostButtonIcon from './GhostButtonIcon';

describe('Testing GhostButtonIcon Component', () => {
  it('renders with "primary" variant', () => {
    const { getByText } = render(<GhostButtonIcon variant="ghost-primary">+</GhostButtonIcon>);
    const buttonText = getByText('+');
    expect(buttonText).toBeDefined();
  });

  it('renders with "secondary" variant', () => {
    const { getByText } = render(<GhostButtonIcon variant="ghost-secondary">+</GhostButtonIcon>);
    const buttonText = getByText('+');
    expect(buttonText).toBeDefined();
  });

  it('renders with "tertiary" variant', () => {
    const { getByText } = render(<GhostButtonIcon variant="ghost-tertiary">+</GhostButtonIcon>);
    const buttonText = getByText('+');
    expect(buttonText).toBeDefined();
  });

  it('renders with "disabled" variant and is disabled', () => {
    const { getByText } = render(<GhostButtonIcon variant="ghost-disabled">+</GhostButtonIcon>);
    const buttonText = getByText('+');
    const buttonElement = buttonText.closest('button');
    expect(buttonElement).not.toBeNull();
    expect(buttonElement?.disabled).toBe(true);
  });
});
