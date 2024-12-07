import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import GhostButtonWithIcon from './GhostButtonWithIcon';
import styles from './GhostButtonWithIcon.module.scss';
import '@testing-library/jest-dom';

describe('GhostButton Component', () => {
  test('applies active class when active variant is passed', () => {
    render(
      <GhostButtonWithIcon variant="active" display="block">
        Click Me
      </GhostButtonWithIcon>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.display, styles.active);
  });

  test('applies disabled class when disabled variant is passed', () => {
    render(
      <GhostButtonWithIcon variant="disabled" display="block">
        Click Me
      </GhostButtonWithIcon>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass(styles.display, styles.disabled);
    expect(button).toBeDisabled();
  });
});
