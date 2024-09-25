import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Tag from './Tag';


describe('Tag component', () => {

    it('Tag is rendering', () => {
        render(<Tag label="Component" />);
    });

    it('Tag has a label', () => {
        render(<Tag label="Component" />);
        screen.getByText('Component');
    });

    it('does not throw an error when clicked without an onClick handler', async () => {
        render(<Tag label="Component" />);
        const tag = screen.getByText('Component');
        await fireEvent.click(tag); 
    });
    it('displays the correct label', () => {
        render(<Tag label="Component" />);
        const tagElement = screen.getByText('Component');
        expect(tagElement).not.toBeNull(); 
    });
    it('does not throw an error when clicked', () => {
        render(<Tag label="Component" />);
        const tagElement = screen.getByText('Component');
    
        try {
            fireEvent.click(tagElement); 
            expect(true).toBe(true); 
        } catch (error) {
            expect(true).toBe(false); 
        }
    });
    
});