import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SecondaryButtonIcon from './SecondaryButtonIcon';
import add from '../../../../assets/icons/add.svg?raw';

describe('SecondaryButtonIcon component', () => {
  it('should render the button with the correct icon', () => {
    const { getByTestId } = render(<SecondaryButtonIcon size="medium" icon={add} />);
    const icon = getByTestId('icon_add');
    expect(icon).toBeDefined();
  });

  it('should render the button with the correct size', () => {
    const { getByRole } = render(<SecondaryButtonIcon size="medium" icon={add} />);
    const button = getByRole('button');
    expect(button).toBeDefined();
    expect(button.classList.contains('medium')).toBe(true);
  });

  it('should render a disabled button', () => {
    const { getByRole } = render(<SecondaryButtonIcon size="medium" icon={add} disabled />);
    const button = getByRole('button');
    expect(button).toBeDefined();

    expect(button.hasAttribute('disabled')).toBe(true);
  });

  it('should render the button with the correct icon when size is small', () => {
    const { getByRole } = render(<SecondaryButtonIcon size="small" icon={add} />);
    const button = getByRole('button');
    expect(button).toBeDefined();
  });

  it('should render the button with the correct icon when size is large', () => {
    const { getByRole } = render(<SecondaryButtonIcon size="large" icon={add} />);
    const button = getByRole('button');
    expect(button).toBeDefined();
  });
});
