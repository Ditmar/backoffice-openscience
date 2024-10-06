import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import DangerButton from './DangerButton';

describe('Testing DangerButton React Component', () => {
  it('should render test 1', () => {
    render(<DangerButton variant="danger-primary">+</DangerButton>);
  });

  it('should render test 2', () => {
    render(<DangerButton variant="danger-secondary">+</DangerButton>);
  });

  it('should render test 3', () => {
    render(<DangerButton variant="danger-tertiary">+</DangerButton>);
  });

  it('should render test 4', () => {
    render(<DangerButton variant="danger-disabled">+</DangerButton>);
  });
});
