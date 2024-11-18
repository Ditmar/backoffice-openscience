import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import VolumeManagement from './VolumeManagement';
import styles from './VolumeManagement.module.scss';

describe('VolumeManagement Component', () => {
  const onEditMock = vi.fn();
  const onConfigureMock = vi.fn();

  it('should render all elements correctly', () => {
    const { getByText, getByRole } = render(
      <VolumeManagement
        onEdit={onEditMock}
        onConfigure={onConfigureMock}
        variant="primary"
        size="medium"
      />,
    );

    expect(getByText(/Editing draft version/i)).toBeDefined();
    expect(getByText(/Edit the model/i)).toBeDefined();
    expect(getByText(/Configure the view/i)).toBeDefined();

    expect(getByRole('button', { name: /Edit the model/i })).toBeDefined();
    expect(getByRole('button', { name: /Configure the view/i })).toBeDefined();
  });

  it('should render icons correctly', () => {
    const { getByRole } = render(
      <VolumeManagement
        onEdit={onEditMock}
        onConfigure={onConfigureMock}
        variant="primary"
        size="medium"
      />,
    );

    const editButton = getByRole('button', { name: /Edit the model/i });
    const icon = editButton.querySelector(`.${styles['action-icon']}`);
    expect(icon).toBeDefined();
  });

  it('should render the burger menu correctly', () => {
    const { getByTestId } = render(
      <VolumeManagement
        onEdit={onEditMock}
        onConfigure={onConfigureMock}
        variant="primary"
        size="medium"
      />,
    );

    const burgerMenu = getByTestId('burger-menu');
    expect(burgerMenu).toBeDefined();
  });

  it('should call onEdit when "Edit the model" is clicked', () => {
    const { getByRole } = render(
      <VolumeManagement
        onEdit={onEditMock}
        onConfigure={onConfigureMock}
        variant="primary"
        size="medium"
      />,
    );

    const editButton = getByRole('button', { name: /Edit the model/i });
    fireEvent.click(editButton);
    expect(onEditMock).toHaveBeenCalledTimes(1);
  });

  it('should call onConfigure when "Configure the view" is clicked', () => {
    const { getByRole } = render(
      <VolumeManagement
        onEdit={onEditMock}
        onConfigure={onConfigureMock}
        variant="primary"
        size="medium"
      />,
    );

    const configureButton = getByRole('button', { name: /Configure the view/i });
    fireEvent.click(configureButton);
    expect(onConfigureMock).toHaveBeenCalledTimes(1);
  });

  it('should apply correct styles for different sizes', () => {
    const { rerender, getByRole } = render(
      <VolumeManagement
        onEdit={onEditMock}
        onConfigure={onConfigureMock}
        variant="primary"
        size="small"
      />,
    );

    const container = getByRole('region');
    expect(container.classList.contains(styles.small)).toBe(true);

    rerender(
      <VolumeManagement
        onEdit={onEditMock}
        onConfigure={onConfigureMock}
        variant="primary"
        size="large"
      />,
    );
    expect(container.classList.contains(styles.large)).toBe(true);
  });
});
