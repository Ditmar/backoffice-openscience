import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TabLabel2 } from './TabLabel2';

describe('TabLabel2 Component Tests', () => {
  it('should render TabLabel2 with large variant', () => {
    render(<TabLabel2 text="TabLabel2" isEnable variant="large" />);
    const label = screen.getByText('TabLabel2');
    expect(label).toBeInTheDocument();
  });

  it('should render TabLabel2 with medium variant', () => {
    render(<TabLabel2 text="TabLabel2" isEnable variant="medium" />);
    const label = screen.getByText('TabLabel2');
    expect(label).toBeInTheDocument();
  });

  it('should render TabLabel2 with small variant', () => {
    render(<TabLabel2 text="TabLabel2" isEnable variant="small" />);
    const label = screen.getByText('TabLabel2');
    expect(label).toBeInTheDocument();
  });

  it('should render TabLabel2 with selected state', () => {
    render(<TabLabel2 text="TabLabel2" isEnable variant="small" isSelect />);
    const label = screen.getByText('TabLabel2');
    expect(label).toBeInTheDocument();
  });

  it('should render TabLabel2 with disabled state', () => {
    render(<TabLabel2 text="TabLabel2" isEnable={false} variant="small" />);
    const label = screen.getByText('TabLabel2');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('aria-disabled', 'true');
  });

  it('should render TabLabel2 as active', () => {
    render(<TabLabel2 text="TabLabel2" isEnable variant="small" />);
    const label = screen.getByText('TabLabel2');
    expect(label).toBeInTheDocument();
  });
});
