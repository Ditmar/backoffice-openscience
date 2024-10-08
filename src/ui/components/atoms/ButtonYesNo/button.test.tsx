import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('testing for Button yes or no', () => {
  it('Button is rendering', () => {
    render(<Button>Test</Button>);
  });

  it('Button has title', () => {
    render(<Button>Yes</Button>);
    screen.getByText('Yes');
  });

  it('Button has title', () => {
    render(<Button>No</Button>);
    screen.getByText('No');
  });

  it('Button has styles', () => {
    render(<Button>Yes</Button>);
    screen.getByTestId('button-styles');
  });

  it('Button responds to hover', () => {
    render(<Button>Yes</Button>);
    fireEvent.mouseOver(screen.getByTestId('button-styles'));
  });
});
