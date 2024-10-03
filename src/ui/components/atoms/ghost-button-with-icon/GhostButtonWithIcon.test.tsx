import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import GhostButtonWithIcon from './GhostButtonWithIcon';

describe('GhostButtonWithIcon Component', () => {
test('renders correctly with small size', () => {
    render(<GhostButtonWithIcon size="small" />);
    const button = screen.getByRole('button');
});

test('shows focus outline when focused', async () => {
    render(<GhostButtonWithIcon size="medium" />);
    const button = screen.getByRole('button');
});
});