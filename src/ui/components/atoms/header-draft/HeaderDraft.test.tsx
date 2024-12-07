import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import HeaderDraft from './HeaderDraft';

describe('HeaderDraft Component', () => {
  test('should render the correct heading level', () => {
    render(<HeaderDraft text="Editing Draft version" headingLevel="h2" />);
    const header = screen.getByRole('heading', { level: 2 });
    expect(header.textContent).toBe('Editing Draft version');
  });

  test('should render an h1 when headingLevel is h1', () => {
    render(<HeaderDraft text="Primary Heading" headingLevel="h1" />);
    const header = screen.getByRole('heading', { level: 1 });
    expect(header.textContent).toBe('Primary Heading');
  });

  test('should render an h2 when headingLevel is h2', () => {
    render(<HeaderDraft text="Secondary Heading" headingLevel="h2" />);
    const header = screen.getByRole('heading', { level: 2 });
    expect(header.textContent).toBe('Secondary Heading');
  });

  test('should render an h3 when headingLevel is h3', () => {
    render(<HeaderDraft text="Tertiary Heading" headingLevel="h3" />);
    const header = screen.getByRole('heading', { level: 3 });
    expect(header.textContent).toBe('Tertiary Heading');
  });

  test('should render an h4 when headingLevel is h4', () => {
    render(<HeaderDraft text="Quaternary Heading" headingLevel="h4" />);
    const header = screen.getByRole('heading', { level: 4 });
    expect(header.textContent).toBe('Quaternary Heading');
  });

  test('should render an h5 when headingLevel is h5', () => {
    render(<HeaderDraft text="Quinary Heading" headingLevel="h5" />);
    const header = screen.getByRole('heading', { level: 5 });
    expect(header.textContent).toBe('Quinary Heading');
  });

  test('should render an h6 when headingLevel is h6', () => {
    render(<HeaderDraft text="Senary Heading" headingLevel="h6" />);
    const header = screen.getByRole('heading', { level: 6 });
    expect(header.textContent).toBe('Senary Heading');
  });
});
