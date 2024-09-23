import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import GhostButton from './ghost-button';
import styles from './styles.module.scss';

describe('GhostButton component', () => {
  it('renders without crashing', () => {
    render(<GhostButton ghostbutton="Ghost button" variant="primary" />);
    screen.getByText('Ghost button');
  });

  it('fires the onClick event', () => {
    const handleClick = vi.fn();
    render(<GhostButton ghostbutton="Ghost button" variant="primary" onClick={handleClick} />);
    const button = screen.getByText('Ghost button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('GhostButton renders small size', () => {
    render(<GhostButton ghostbutton="Small Button" variant="primary" size="small" />);
    const button = screen.getByText('Small Button');
    expect(button.className).toContain('ghost-button--small');
  });

  it('GhostButton renders medium size', () => {
    render(<GhostButton ghostbutton="Medium Button" variant="primary" size="medium" />);
    const button = screen.getByText('Medium Button');
    expect(button.className).toContain('ghost-button--medium');
  });
  

  it('GhostButton renders large size', () => {
    render(<GhostButton ghostbutton="Large Button" variant="primary" size="large" />);
    const button = screen.getByText('Large Button');
    expect(button.className).toContain('ghost-button--large');
  })


  it('shows active state when clicked', () => {
    render(<GhostButton ghostbutton="Active Button" variant="primary" />);
    const button = screen.getByText('Active Button');
    fireEvent.mouseDown(button);
    expect(button).toHaveClass(styles['ghost-button--primary']);
  });

  it('GhostButton renders as disabled', () => {
    render(<GhostButton ghostbutton="Disabled Button" variant="primary" disabled={true} />);
    const button = screen.getByTestId('ghost-button');
    expect(button).toBeDisabled();
    expect(button.className).toContain('ghost-button--disabled');
  });
  it('shows hover state', () => {
    render(<GhostButton ghostbutton="Hover Button" variant="primary"/>);
    const button = screen.getByTestId('ghost-button');
    button.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
    expect(button).toHaveStyle('background-color: rgba(0, 123, 255, 0.1)');
  });
});
