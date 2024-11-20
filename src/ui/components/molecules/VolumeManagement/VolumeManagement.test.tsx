import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import VolumeManagement from './VolumeManagement';

describe('VolumeManagement', () => {
  it('calls the onFieldChange function when fields are changed', () => {
    const mockOnFieldChange = vi.fn();

    const { getByPlaceholderText } = render(
      <VolumeManagement title="" date="" article="" year="" onFieldChange={mockOnFieldChange} />,
    );

    const titleInput = getByPlaceholderText('Enter title');
    fireEvent.change(titleInput, { target: { value: 'Sample Title' } });
    expect(mockOnFieldChange).toHaveBeenCalledWith('title', 'Sample Title');
  });
});
