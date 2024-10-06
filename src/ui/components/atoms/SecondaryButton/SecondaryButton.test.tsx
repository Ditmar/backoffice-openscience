import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import SecondaryButton from './SecondaryButton';
import styles from './styles.module.scss';
import '@testing-library/jest-dom';

describe('SecondaryButton Component', () => {
  test('renders correctly with small variant', () => {
    render(
      <SecondaryButton variant="small" display="block">
        Click Me
      </SecondaryButton>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.display, styles.primary);
  });

  test('renders correctly with medium variant', () => {
    render(
      <SecondaryButton variant="medium" display="block">
        Click Me
      </SecondaryButton>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.display, styles.secondary);
  });

  test('renders correctly with large variant', () => {
    render(
      <SecondaryButton variant="large" display="block">
        Click Me
      </SecondaryButton>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.display, styles.tertiary);
  });

  test('applies active class when active variant is passed', () => {
    render(
      <SecondaryButton variant="active" display="block">
        Click Me
      </SecondaryButton>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.display, styles.active);
  });

  test('applies disabled class when disabled variant is passed', () => {
    render(
      <SecondaryButton variant="disabled" display="block">
        Click Me
      </SecondaryButton>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.display, styles.disabled);
    expect(button).toBeDisabled();
  });

  test('fires onClick function when clicked', () => {
    const handleClick = vi.fn();
    render(
      <SecondaryButton variant="medium" display="block" onClick={handleClick}>
        Click Me
      </SecondaryButton>,
    );
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick function when disabled', () => {
    const handleClick = vi.fn();
    render(
      <SecondaryButton variant="disabled" display="block" onClick={handleClick}>
        Click Me
      </SecondaryButton>,
    );
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
