import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import SecondaryButton from '.';
import type { IProps } from './types/IProps';

describe('SecondaryButton', () => {
  const defaultProps: IProps = {
    label: 'Button',
    size: 'medium',
    variant: 'secondary',
    state: 'enabled',
    onClick: vi.fn(),
    icon: '+',
  };

  it('renders the button with the correct label', () => {
    const { getByText } = render(
      <SecondaryButton
        label={defaultProps.label}
        size={defaultProps.size}
        variant={defaultProps.variant}
        state={defaultProps.state}
        onClick={defaultProps.onClick}
        icon={defaultProps.icon} // Asegúrate de pasar el ícono también
      />,
    );
    expect(getByText('Button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const { getByText } = render(
      <SecondaryButton
        label={defaultProps.label}
        size={defaultProps.size}
        variant={defaultProps.variant}
        state={defaultProps.state}
        onClick={defaultProps.onClick}
        icon={defaultProps.icon}
      />,
    );
    fireEvent.click(getByText('Button'));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('does not call onClick when disabled', () => {
    const { getByText } = render(
      <SecondaryButton
        label={defaultProps.label}
        size={defaultProps.size}
        variant={defaultProps.variant}
        state="disabled"
        onClick={defaultProps.onClick}
        icon={defaultProps.icon}
      />,
    );
    fireEvent.click(getByText('Button'));
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });

  it('displays an icon if provided', () => {
    const { getByText } = render(
      <SecondaryButton
        label={defaultProps.label}
        size={defaultProps.size}
        variant={defaultProps.variant}
        state={defaultProps.state}
        onClick={defaultProps.onClick}
        icon={defaultProps.icon}
      />,
    );
    expect(getByText('+')).toBeInTheDocument();
  });
});
