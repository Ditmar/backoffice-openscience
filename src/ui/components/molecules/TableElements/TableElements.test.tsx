import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TableElements from './TableElements';
import '@testing-library/jest-dom';

describe('TableElements Component', () => {
  it('renders first column table element correctly', () => {
    render(<TableElements />);

    expect(screen.getByText('HTML Content for testing Formatting')).toBeInTheDocument();
    expect(screen.getByText('Another HTML Content for testing')).toBeInTheDocument();
  });
  it('renders sixth column table element correctly', () => {
    render(<TableElements />);

    expect(screen.getByText('Yes')).toBeInTheDocument();
    expect(screen.getByText('No')).toBeInTheDocument();
  });
});
