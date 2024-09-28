import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Testing for calculator component', () => {
  it('Calculator is rendering', () => {
    render(<Calculator />);
  });
  it('Calculator has a title', () => {
    render(<Calculator />);
    screen.getByText('Calculator');
  });
  it('Calculator has a collection numbers', () => {
    render(<Calculator />);
    screen.getByText('1');
    screen.getByText('2');
    screen.getByText('3');
    screen.getByText('4');
    screen.getByText('5');
    screen.getByText('6');
    screen.getByText('7');
    screen.getByText('8');
    screen.getByText('9');
    screen.getByText('0');
  });
  it('Calculator has a basic operators', () => {
    render(<Calculator />);
    screen.getByText('+');
    screen.getByText('-');
    screen.getByText('*');
    screen.getByText('/');
  });
  it('Caculator has a wrapper', () => {
    render(<Calculator />);
    screen.getByTestId('calculator-title');
  });
  it('Should be render 4 rows', () => {
    render(<Calculator />);
    const { length } = screen.getAllByRole('row');
    expect(length).toBe(4);
  });
  it('Should be render the display component', () => {
    render(<Calculator />);
    screen.getByRole('status');
  });
  it('Should be render in the input text the fire button event', () => {
    render(<Calculator />);
    const input = screen.getByRole('status');
    fireEvent.click(screen.getByText('1'));
    expect(input.textContent).toBe('1');
  });
  it('Should be render in the input text the fire button event 1', () => {
    render(<Calculator />);
    const input = screen.getByRole('status');
    fireEvent.click(screen.getByText('2'));
    expect(input.textContent).toBe('2');
  });
  it('Should be render in the input text the fire button event 2', () => {
    render(<Calculator />);
    const input = screen.getByRole('status');
    fireEvent.click(screen.getByText('*'));
    expect(input.textContent).toBe('*');
  });
  it('Should be render in the input text several numbers string', () => {
    render(<Calculator />);
    const input = screen.getByRole('status');
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('7'));
    expect(input.textContent).toBe('127');
  });
  it('Should be render the correct operation eval when we push the =', () => {
    render(<Calculator />);
    const input = screen.getByRole('status');
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));
    expect(input.textContent).toBe('17');
  });
});
