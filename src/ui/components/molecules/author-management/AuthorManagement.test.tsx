import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import AuthorManagement from './AuthorManagement';

describe('AuthorManagement Component', () => {
  const onEditMock = vi.fn();
  const onConfigureMock = vi.fn();

  test('should render the header correctly', () => {
    render(
      <AuthorManagement
        onEdit={onEditMock}
        onConfigure={onConfigureMock}
        variant="primary"
        size="medium"
      />,
    );
    const headerText = screen.getByText(/Editing draft version/i);
    expect(headerText).toBeDefined();
  });

  test('should call onEdit when edit button is clicked', () => {
    render(
      <AuthorManagement
        onEdit={onEditMock}
        onConfigure={onConfigureMock}
        variant="primary"
        size="medium"
      />,
    );
    const editButton = screen.getByText('Edit the model');
    fireEvent.click(editButton);
    expect(onEditMock).toHaveBeenCalled();
  });

  test('should call onConfigure when configure button is clicked', () => {
    render(
      <AuthorManagement
        onEdit={onEditMock}
        onConfigure={onConfigureMock}
        variant="primary"
        size="medium"
      />,
    );
    const configureButton = screen.getByText('Configure the view');
    fireEvent.click(configureButton);
    expect(onConfigureMock).toHaveBeenCalled();
  });
});
