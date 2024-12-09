import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Links from './links';

describe('Links Component', () => {
  it('renders correctly with default props', () => {
    render(<Links isFocused={false} />);
    const link = screen.getByText('Links action');
    expect(link).toBeInTheDocument();
    expect(link.className).toContain('link');
    expect(link.className).toContain('link--medium');
    expect(link).toHaveAttribute('href', '#');
  });

  it('applies small size class correctly', () => {
    render(<Links size="small" isFocused={false} />);
    const link = screen.getByText('Links action');
    expect(link.className).toContain('link--small');
  });

  it('applies large size class correctly', () => {
    render(<Links size="large" isFocused={false} />);
    const largeLink = screen.getByText('Links action');
    expect(largeLink.className).toContain('link--large');
  });

  it('handles the "disabled" state properly', async () => {
    const onClick = vi.fn();
    render(<Links disabled onClick={onClick} isFocused={false} />);
    const link = screen.getByText('Links action');

    expect(link.className).toContain('link--disabled');
    await userEvent.click(link);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('calls the onClick handler when clicked', async () => {
    const onClick = vi.fn();
    render(<Links onClick={onClick} isFocused={false} />);
    const link = screen.getByText('Links action');
    await userEvent.click(link);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with the correct href attribute', () => {
    render(<Links href="https://example.com" isFocused={false} />);
    const link = screen.getByText('Links action');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('applies the focus class when isFocused is true', () => {
    render(<Links isFocused />);
    const link = screen.getByText('Links action');
    expect(link.className).toContain('link--focus');
  });
});
