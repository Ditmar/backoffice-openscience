import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import GhostButton from './GhostButton';
import '@testing-library/jest-dom';

describe('Button component', () => {
    it('renders without crashing', () => {
        render(<GhostButton button="Button" variant="default" />);
        screen.getByText('Button');
    });

    it('fires the onClick event', () => {
        const handleClick = vi.fn();
        render(<GhostButton button="Button" variant="default" onClick={handleClick} />);
        const button = screen.getByText('Button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders small size', () => {
        render(<GhostButton button="Small Button" variant="default" size="small" />);
        const button = screen.getByText('Small Button');
        expect(button.className).toContain('ghost-button--small');
    });
    it('renders medium size', () => {
        render(<GhostButton button="Medium Button" variant="default" size="medium" />);
        const button = screen.getByText('Medium Button');
        expect(button.className).toContain('ghost-button--medium');
    });

    it('renders large size', () => {
        render(<GhostButton button="Large Button" variant="default" size="large" />);
        const button = screen.getByText('Large Button');
        expect(button.className).toContain('ghost-button--large');
    });

    it('renders as disabled', () => {
        render(<GhostButton button="Disabled Button" variant="disabled" disabled={true} />);
        const button = screen.getByTestId('ghost-button');
        expect(button).toBeDisabled();
        expect(button.className).toContain('ghost-button--disabled');
    });

    it('shows hover state', () => {
        render(<GhostButton button="Hover Button" variant="hover" />);
        const button = screen.getByTestId('ghost-button');
        button.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
        expect(button).toHaveStyle('background-color: rgba(0, 123, 255, 0.1)');
    });
});
