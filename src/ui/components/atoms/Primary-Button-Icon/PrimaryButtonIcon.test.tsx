import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PrimaryButtonIcon from './PrimaryButtonIcon';
import add from '../../../../assets/icons/add.svg?raw';
import styles from './PrimaryButtonIcon.module.scss';

describe('PrimaryButtonIcon component', () => {
  it('correctly renders the provided icon', () => {
    const { getByTestId } = render(<PrimaryButtonIcon size="medium" icon={add} />);
    const icon = getByTestId('icon_add');
    expect(icon).toBeDefined();
  });

  it('applies the appropriate size class for medium buttons', () => {
    const { getByRole } = render(<PrimaryButtonIcon size="medium" icon={add} />);
    const button = getByRole('button');
    expect(button).toBeDefined();

    expect(button.classList.contains(styles['btn-main--medium'])).toBe(true);
  });

  it('disables the button when the disabled property is set', () => {
    const { getByRole } = render(<PrimaryButtonIcon size="medium" icon={add} disabled />);
    const button = getByRole('button');
    expect(button).toBeDefined();
    expect(button.hasAttribute('disabled')).toBe(true);
  });

  it('applies the correct styling for small-sized buttons', () => {
    const { getByRole } = render(<PrimaryButtonIcon size="small" icon={add} />);
    const button = getByRole('button');
    expect(button).toBeDefined();
    expect(button.classList.contains(styles['btn-main--small'])).toBe(true);
  });

  it('ensures the button is correctly styled for large sizes', () => {
    const { getByRole } = render(<PrimaryButtonIcon size="large" icon={add} />);
    const button = getByRole('button');
    expect(button).toBeDefined();
    expect(button.classList.contains(styles['btn-main--large'])).toBe(true);
  });
});
