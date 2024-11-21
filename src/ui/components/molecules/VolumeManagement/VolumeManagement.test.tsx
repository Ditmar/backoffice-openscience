import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import VolumeManagement from './VolumeManagement';

describe('VolumeManagement', () => {
  it('renders all input fields and triggers events', () => {
    const mockTitleChange = vi.fn();
    const mockDateChange = vi.fn();
    const mockArticleChange = vi.fn();
    const mockYearChange = vi.fn();

    const { getByPlaceholderText } = render(
      <VolumeManagement
        titlePlaceholder="Enter title"
        datePlaceholder="Select date"
        articlePlaceholder="Enter article"
        yearPlaceholder="Enter year"
        onTitleChange={mockTitleChange}
        onDateChange={mockDateChange}
        onArticleChange={mockArticleChange}
        onYearChange={mockYearChange}
      />,
    );

    fireEvent.change(getByPlaceholderText('Enter title'), { target: { value: 'Title' } });
    fireEvent.change(getByPlaceholderText('Select date'), { target: { value: '2024-11-14' } });
    fireEvent.change(getByPlaceholderText('Enter article'), { target: { value: 'Article' } });
    fireEvent.change(getByPlaceholderText('Enter year'), { target: { value: '2024' } });

    expect(mockTitleChange).toHaveBeenCalled();
    expect(mockDateChange).toHaveBeenCalled();
    expect(mockArticleChange).toHaveBeenCalled();
    expect(mockYearChange).toHaveBeenCalled();
  });
});
