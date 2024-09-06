import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Calculator from './Calculator';

describe('CALCULATOR', () => {
    it('should be render ', () => {
        render(<Calculator />);
    });
    it('should be render the title correctly', () => {
        render(<Calculator />);
        screen.getByText('Calculator');
    })
    it('should be render the numbers correctly', () => {
        render(<Calculator />);
        screen.getByText('0');
        screen.getByText('1');
        screen.getByText('2');
        screen.getByText('3');
        screen.getByText('4');
        screen.getByText('5');
        screen.getByText('6');
        screen.getByText('7');
        screen.getByText('8');
        screen.getByText('9');
    });
    it('should be render 4 rows for each column', () => {
        render(<Calculator />);
        const buttons = screen.getAllByRole('row');
        expect(buttons.length).toBe(4);
    });
    it('should be render the main text display', () => {
       render(<Calculator />);
       screen.getByRole("displayText"); 
    })
    it('should user input after clicking the buttons', () => {
        render(<Calculator />);
        const one = screen.getByText('1');
        fireEvent.click(one);
        const input = screen.getByRole('displayText');
        expect(input.textContent).toBe('1')
    })
    it('should user input after clicking several buttons', () => {
        render(<Calculator />);
        const one = screen.getByText('1');
        const four = screen.getByText('4');
        const two = screen.getByText('2');
        const seven = screen.getByText('7');
        const five = screen.getByText('5');
        fireEvent.click(one);
        fireEvent.click(four);
        fireEvent.click(seven);
        fireEvent.click(five);
        const input = screen.getByRole('displayText');
        expect(input.textContent).toBe('1475')
    })
});