import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DangerButton from './Danger-Button';

describe('DangerButton component', () => {
  it('should render the button with the correct text', () => {
    const { getByText } = render(<DangerButton variant="Small">Danger button</DangerButton>);
    const buttonText = getByText('Danger button');
    expect(buttonText).toBeDefined();
  });

  it('should render the button with the correct text', () => {
    const { getByText } = render(<DangerButton variant="Normal">Danger button</DangerButton>);
    const buttonText = getByText('Danger button');
    expect(buttonText).toBeDefined();
  });

  it('should render the button with the correct text', () => {
    const { getByText } = render(<DangerButton variant="Big">Danger button</DangerButton>);
    const buttonText = getByText('Danger button');
    expect(buttonText).toBeDefined();
  });

  it('should render the button with the correct text', () => {
    const { getByText } = render(<DangerButton variant="Active">Danger button</DangerButton>);
    const buttonText = getByText('Danger button');
    expect(buttonText).toBeDefined();
  });

  it('should render the button with the correct text', () => {
    const { getByText } = render(<DangerButton variant="Disable">Danger button</DangerButton>);
    const buttonText = getByText('Danger button');
    expect(buttonText).toBeDefined();
  });
});
