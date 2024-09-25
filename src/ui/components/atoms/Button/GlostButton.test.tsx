import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import GhostButton from './GhostButton';

describe('Button component', () => {
    it('renders without crashing', () => {
        render(<GhostButton button="Button" variant="default" />);
        expect(screen.getByText('Button')).toBeInTheDocument();
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
        expect(button).toHaveStyle('background-color: rgba(0, 123, 255, 0.1)');
    });

    it('handles all variants correctly', () => {
        const variants = ['default', 'hover', 'active', 'focus', 'disabled'];
        variants.forEach((variant) => {
            render(<GhostButton button={`Button ${variant}`} variant={variant} />);
            const button = screen.getByText(`Button ${variant}`);
            expect(button).toBeInTheDocument();
            expect(button.className).toContain(`ghost-button--${variant}`);
        });
    });
});
