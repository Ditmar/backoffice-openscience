import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ConfigureViewButton from './ConfigureViewButton';

describe('ConfigureViewButton Component', () => {
  const onClickMock = vi.fn();

  it('should render the button correctly with text', () => {
    const { getByText } = render(
      <ConfigureViewButton
        variant="primary"
        size="medium"
        text="Configure the view"
        onClick={onClickMock}
        icon="rectangle"
        isBurger
      />,
    );
    expect(getByText(/Configure the view/i)).toBeDefined();
  });

  it('should call onClick when clicked', () => {
    const { getByText } = render(
      <ConfigureViewButton
        variant="primary"
        size="medium"
        text="Configure the view"
        onClick={onClickMock}
        icon="rectangle"
        isBurger
      />,
    );
    const button = getByText(/Configure the view/i);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
