import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TabLabel2 } from './TabLabel2';

const hasClass = (element: HTMLElement, className: string) => {
  expect(element.classList.contains(className)).toBe(true);
};

describe('TabLabel2 Component Tests', () => {
  describe('Variants', () => {
    it('should render large variant', () => {
      render(<TabLabel2 text="TabLabel2" isEnable variant="large" />);
      const label = screen.getByText('TabLabel2');
      hasClass(label, 'large');
    });

    it('should render medium variant', () => {
      render(<TabLabel2 text="TabLabel2" isEnable variant="medium" />);
      const label = screen.getByText('TabLabel2');
      hasClass(label, 'medium');
    });

    it('should render small variant', () => {
      render(<TabLabel2 text="TabLabel2" isEnable variant="small" />);
      const label = screen.getByText('TabLabel2');
      hasClass(label, 'small');
    });

    it('should render selected variant', () => {
      render(<TabLabel2 text="TabLabel2" isEnable variant="selected" isSelect />);
      const label = screen.getByText('TabLabel2');
      hasClass(label, 'selected');
    });

    it('should render disabled variant', () => {
      render(<TabLabel2 text="TabLabel2" isEnable={false} variant="disabled" />);
      const label = screen.getByText('TabLabel2');
      hasClass(label, 'disabled');
    });
  });

  describe('Interactions', () => {
    it('should not allow interactions when disabled', () => {
      render(<TabLabel2 text="TabLabel2" isEnable={false} variant="medium" />);
      const label = screen.getByText('TabLabel2');
      expect(label.getAttribute('aria-disabled')).toBe('true');
      hasClass(label, 'disabled');
    });

    it('should allow interactions when enabled', () => {
      render(<TabLabel2 text="TabLabel2" isEnable variant="medium" />);
      const label = screen.getByText('TabLabel2');
      expect(label.getAttribute('aria-disabled')).toBeNull();
      hasClass(label, 'active');
    });
  });
});
