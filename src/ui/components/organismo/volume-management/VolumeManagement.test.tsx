import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import VolumeManagement from './VolumeManagement';

describe('VolumeManagement Component', () => {
  const onEditMock = vi.fn();
  const onConfigureMock = vi.fn();

  test('renders image placeholder and AuthorManagement', () => {
    render(<VolumeManagement onEdit={onEditMock} onConfigure={onConfigureMock} />);

    expect(screen.getByRole('region', { name: 'Volume Management' })).toBeTruthy();
  });

  test('triggers onEdit and onConfigure correctly', () => {
    render(<VolumeManagement onEdit={onEditMock} onConfigure={onConfigureMock} />);

    const editButton = screen.getByText('Edit the model');
    fireEvent.click(editButton);
    expect(onEditMock).toHaveBeenCalled();

    const configureButton = screen.getByText('Configure the view');
    fireEvent.click(configureButton);
    expect(onConfigureMock).toHaveBeenCalled();
  });
});
