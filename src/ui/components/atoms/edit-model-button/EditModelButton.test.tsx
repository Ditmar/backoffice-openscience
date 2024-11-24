import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EditModelButton from './EditModelButton';

describe('EditModelButton Component', () => {
  const onClickMock = vi.fn();

  it('should render the button correctly with text', () => {
    const { getByText } = render(
      <EditModelButton
        variant="primary"
        size="medium"
        text="Edit the model"
        onClick={onClickMock}
        icon="pencil"
      />,
    );
    expect(getByText(/Edit the model/i)).toBeDefined();
  });

  it('should call onClick when clicked', () => {
    const { getByText } = render(
      <EditModelButton
        variant="primary"
        size="medium"
        text="Edit the model"
        onClick={onClickMock}
        icon="pencil"
      />,
    );
    const button = getByText(/Edit the model/i);
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should render the icon correctly', () => {
    const { container } = render(
      <EditModelButton
        variant="primary"
        size="medium"
        text="Edit the model"
        onClick={onClickMock}
        icon="pencil"
      />,
    );
    const icon = container.querySelector('svg');
    expect(icon).toBeDefined();
  });
});
