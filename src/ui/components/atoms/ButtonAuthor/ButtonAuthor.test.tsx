import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './ButtonAuthor';
import styles from './ButtonAuthor.module.scss';

describe('Button component', () => {
  it('renders with the correct text for Default variant', () => {
    const { getByText } = render(
      <Button variant="default" onClick={() => {}} label="Default Button" />,
    );
    expect(getByText('Default Button')).toBeDefined();
  });

  it('renders with the correct text for Primary variant', () => {
    const { getByText } = render(
      <Button variant="primary" onClick={() => {}} label="Primary Button" />,
    );
    expect(getByText('Primary Button')).toBeDefined();
  });

  it('renders with the correct text for Disabled state', () => {
    const { getByText } = render(
      <Button variant="default" onClick={() => {}} label="Disabled Button" disabled />,
    );
    expect(getByText('Disabled Button')).toBeDefined();
  });

  it('handles clicks correctly', () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };

    const { getByText } = render(
      <Button variant="default" onClick={handleClick} label="Clickable Button" />,
    );

    getByText('Clickable Button').click();
    expect(clicked).toBe(true);
  });

  it('applies the correct classes for Primary variant', () => {
    const { container } = render(
      <Button variant="primary" onClick={() => {}} label="Styled Button" />,
    );

    const button = container.querySelector('button');
    if (button) {
      expect(button.classList.contains(styles.primary)).toBe(true);
    } else {
      throw new Error('Button element not found');
    }
  });
});
