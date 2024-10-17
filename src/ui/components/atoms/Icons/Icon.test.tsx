import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Icon from './Icon';
import { expect, test } from 'vitest';

test('renders the correct icon', () => {
    const { container } = render(<Icon name="user-svg" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
});

test('renders fallback for unknown icon', () => {
    const { getByText } = render(<Icon name="unknown-icon" />);
    expect(getByText('Icon not found')).toBeInTheDocument();
});

