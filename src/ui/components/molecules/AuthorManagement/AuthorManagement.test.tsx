import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { AuthorManagement } from './AuthorManagement';
import '@testing-library/jest-dom';

describe('AuthorManagement', () => {
  test('renders CreateAnEntry and buttons', () => {
    render(
      <AuthorManagement
        title="Test Entry"
        apiId="API ID:test"
        buttonLabel="Save"
        onSave={vi.fn()}
        onPublish={vi.fn()}
      />,
    );

    expect(screen.getByText('Test Entry')).toBeInTheDocument();
    expect(screen.getByText('API ID:test')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Publish')).toBeInTheDocument();
  });

  test('triggers onSave and onPublish events', () => {
    const onSaveMock = vi.fn();
    const onPublishMock = vi.fn();

    render(
      <AuthorManagement
        title="Test Entry"
        apiId="API ID:test"
        buttonLabel="Save"
        onSave={onSaveMock}
        onPublish={onPublishMock}
      />,
    );

    fireEvent.click(screen.getByText('Save'));
    fireEvent.click(screen.getByText('Publish'));

    expect(onSaveMock).toHaveBeenCalled();
    expect(onPublishMock).toHaveBeenCalled();
  });
});
