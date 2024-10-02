import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tag from './Tag.tsx';

describe('Testing Tag React Component', () => {
  test('should render test 1', () => {
    const label = 'Component';
    render(<Tag children={label} variant="primary" />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test('should render test 2', () => {
    const label = 'Component';
    render(<Tag children={label} variant="secondary" />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test('should render test 3', () => {
    const label = 'Component';
    render(<Tag children={label} variant="tertiary" />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
