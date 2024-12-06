import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PrimaryButton from './PrimaryButton';

describe('PrimaryButton component', () => {
  it('should render the button with the correct text', () => {
    const { getByText } = render(<PrimaryButton variant="Small">Primary button</PrimaryButton>);
    const buttonText = getByText('Primary button');
    expect(buttonText).toBeDefined();
  });

  it('should render the button with the correct text', () => {
    const { getByText } = render(<PrimaryButton variant="Medium">Primary button</PrimaryButton>);
    const buttonText = getByText('Primary button');
    expect(buttonText).toBeDefined();
  });

  it('should render the button with the correct text', () => {
    const { getByText } = render(<PrimaryButton variant="Big">Primary button</PrimaryButton>);
    const buttonText = getByText('Primary button');
    expect(buttonText).toBeDefined();
  });

  it('should render the button with the correct text', () => {
    const { getByText } = render(<PrimaryButton variant="Active">Primary button</PrimaryButton>);
    const buttonText = getByText('Primary button');
    expect(buttonText).toBeDefined();
  });

  it('should render the button with the correct text', () => {
    const { getByText } = render(<PrimaryButton variant="Disable">Primary button</PrimaryButton>);
    const buttonText = getByText('Primary button');
    expect(buttonText).toBeDefined();
  });
});
