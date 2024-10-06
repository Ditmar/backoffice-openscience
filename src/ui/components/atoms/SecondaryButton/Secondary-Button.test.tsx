import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import SecondaryButton from '.';
import type { IProps } from './types/IProps';

describe('SecondaryButton', () => {
  const defaultProps: IProps = {
    size: 'medium',
    variant: 'secondary',
    state: 'enabled',
    onClick: vi.fn(),
    icon: '+',
    label: 'Button',
  };

  it('renders the button with the correct label', () => {
    const { getByText } = render(
      <SecondaryButton
        size={defaultProps.size}
        variant={defaultProps.variant}
        state={defaultProps.state}
        onClick={defaultProps.onClick}
        icon={defaultProps.icon}
        label={defaultProps.label}
      />,
    );
    expect(getByText('Button')).toBeInTheDocument();
  });

  it('calls onClick when clicked and not disabled', () => {
    const { getByText } = render(
      <SecondaryButton
        size={defaultProps.size}
        variant={defaultProps.variant}
        state={defaultProps.state}
        onClick={defaultProps.onClick}
        icon={defaultProps.icon}
        label={defaultProps.label}
      />,
    );
    fireEvent.click(getByText('Button'));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const { getByText } = render(
      <SecondaryButton
        size={defaultProps.size}
        variant={defaultProps.variant}
        state="disabled" 
        onClick={defaultProps.onClick}
        icon={defaultProps.icon}
        label={defaultProps.label}
      />,
    );
    const button = getByText('Button');

    expect(button);

    fireEvent.click(button);
    expect(defaultProps.onClick);
  });

  it('displays an icon if provided', () => {
    const { getByText } = render(
      <SecondaryButton
        size={defaultProps.size}
        variant={defaultProps.variant}
        state={defaultProps.state}
        onClick={defaultProps.onClick}
        icon={defaultProps.icon}
        label={defaultProps.label}
      />,
    );
    expect(getByText('+')).toBeInTheDocument();
  });
});
