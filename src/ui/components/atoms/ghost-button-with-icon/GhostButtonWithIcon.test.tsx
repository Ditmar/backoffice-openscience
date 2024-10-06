import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import GhostButtonWithIcon from './GhostButtonWithIcon';

describe('GhostButtonWithIcon Component', () => {
  it('should renders the button with the correct text', () => {
    const { getByText } = render(<GhostButtonWithIcon />);
    const buttonText = getByText('Ghost button');
    expect(buttonText).toBeDefined();
  });
});
