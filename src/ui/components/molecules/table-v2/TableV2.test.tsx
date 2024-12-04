import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import TableV2 from './TableV2';

describe('TableV2 Component', () => {
  const onEditMock = vi.fn();
  const onConfigureMock = vi.fn();

  test('should render the header correctly', () => {
    render(
      <TableV2 onEdit={onEditMock} onConfigure={onConfigureMock} variant="primary" size="medium" />,
    );
    const headerText = screen.getByText(/Editing draft version/i);
    expect(headerText).toBeDefined();
  });

  test('should call onConfigure when configure button is clicked', () => {
    render(
      <TableV2 onEdit={onEditMock} onConfigure={onConfigureMock} variant="primary" size="medium" />,
    );
    const configureButton = screen.getByText('Configure the view');
    fireEvent.click(configureButton);
    expect(onConfigureMock).toHaveBeenCalled();
  });
});
