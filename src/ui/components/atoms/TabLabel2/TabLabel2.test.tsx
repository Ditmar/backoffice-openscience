import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TabLabel2 } from './TabLabel2';

const hasClass = (element: HTMLElement, className: string) => {
  expect(element.classList.contains(className)).toBe(true);
};

describe('TabLabel2 Component Tests', () => {
  it('should render TabLabel2 component with text', () => {
    render(<TabLabel2 text="TabLabel2" isEnable variant="small" />);
    const label = screen.getByText('TabLabel2');
    expect(label).not.toBeNull();
  });

  describe('Variants', () => {
    it('should render small variant', () => {
      render(<TabLabel2 text="TabLabel2" isEnable variant="small" />);
      const label = screen.getByText('TabLabel2');
      hasClass(label, 'small');
    });

    it('should render medium variant', () => {
      render(<TabLabel2 text="TabLabel2" isEnable variant="medium" />);
      const label = screen.getByText('TabLabel2');
      hasClass(label, 'medium');
    });

    it('should render large variant', () => {
      render(<TabLabel2 text="TabLabel2" isEnable variant="large" />);
      const label = screen.getByText('TabLabel2');
      hasClass(label, 'large');
    });
  });

  describe('States', () => {
    it('should render enabled state', () => {
      render(<TabLabel2 text="TabLabel2" isEnable variant="medium" />);
      const label = screen.getByText('TabLabel2');
      hasClass(label, 'enabled');
    });

    it('should render disabled state', () => {
      render(<TabLabel2 text="TabLabel2" isEnable={false} variant="medium" />);
      const label = screen.getByText('TabLabel2');
      hasClass(label, 'disabled');
    });
  });

  describe('Interactions', () => {
    it('should not allow interactions when disabled', () => {
      render(<TabLabel2 text="TabLabel2" isEnable={false} variant="medium" />);
      const label = screen.getByText('TabLabel2');
      expect(label.getAttribute('aria-disabled')).toBe('true');
      expect(label.style.cursor).toBe('not-allowed');
    });

    it('should allow interactions when enabled', () => {
      render(<TabLabel2 text="TabLabel2" isEnable variant="medium" />);
      const label = screen.getByText('TabLabel2');
      expect(label.getAttribute('aria-disabled')).toBeNull();
      expect(label.style.cursor).toBe('pointer');
    });
  });
});
