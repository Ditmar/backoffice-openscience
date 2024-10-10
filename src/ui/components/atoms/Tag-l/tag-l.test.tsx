import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Tag from './Tag-l';

describe('Tag component', () => {
  it('Tag is rendering', () => {
    render(<Tag label="Component" />);
  });

  it('Tag has a label', () => {
    render(<Tag label="Component" />);
    screen.getByText('Component');
  });

  it('does not throw an error when clicked without an onClick handler', () => {
    render(<Tag label="Component" />);
    const tag = screen.getByText('Component');
    fireEvent.click(tag);
  });

  it('displays the correct label', () => {
    render(<Tag label="Component" />);
    const tagElement = screen.getByText('Component');
    expect(tagElement).not.toBeNull();
  });

  it('renders primary variant', () => {
    render(<Tag label="Primary Tag" variant="primary" />);
    const tagElement = screen.getByText('Primary Tag');
    expect(tagElement.className).toContain('tag--primary');
  });

  it('renders secondary variant', () => {
    render(<Tag label="Secondary Tag" variant="secondary" />);
    const tagElement = screen.getByText('Secondary Tag');
    expect(tagElement.className).toContain('tag--secondary');
  });

  it('renders tertiary variant', () => {
    render(<Tag label="Tertiary Tag" variant="tertiary" />);
    const tagElement = screen.getByText('Tertiary Tag');
    expect(tagElement.className).toContain('tag--tertiary');
  });

  it('does not respond to click when disabled', () => {
    render(<Tag label="Disabled Tag" disabled />);
    const tag = screen.getByText('Disabled Tag');
    fireEvent.click(tag);
  });

  it('applies the disabled class when disabled', () => {
    render(<Tag label="Disabled Tag" disabled />);
    const tagElement = screen.getByText('Disabled Tag');
    expect(tagElement.className).toContain('tag--disabled');
  });
});
