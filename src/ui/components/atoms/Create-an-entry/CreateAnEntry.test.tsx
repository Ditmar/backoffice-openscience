import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import CreateAnEntry from './CreateAnEntry';
import styles from './CreateAnEntry.module.scss';

test('renders with default props', () => {
  render(<CreateAnEntry />);
  expect(screen.getByText(/Create an entry/i)).not.toBeNull();
  expect(screen.getByText(/API ID:author/i)).not.toBeNull();
});

test('renders with custom props', () => {
  render(<CreateAnEntry title="Custom Title" apiId="Custom API ID" />);
  expect(screen.getByText(/Custom Title/i)).not.toBeNull();
  expect(screen.getByText(/Custom API ID/i)).not.toBeNull();
});

test('applies correct classes for variant and size', () => {
  render(<CreateAnEntry variant="primary" size="large" />);
  const element = screen.getByText(/Create an entry/i).parentElement;
  if (element) {
    expect(element.classList.contains(styles['create-an-entry'])).toBe(true);
    expect(element.classList.contains(styles['create-an-entry--variant-primary'])).toBe(true);
    expect(element.classList.contains(styles['create-an-entry--size-large'])).toBe(true);
  } else {
    throw new Error('Element not found');
  }
});
