import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PrimaryButton from './PrimaryButton';

describe('PrimaryButton component', () => {
  it('should render the button with the correct text', () => {
    const { getByText } = render(
      <PrimaryButton variant="Small" icon="">
        Primary button
      </PrimaryButton>,
    );
    const buttonText = getByText('Primary button');
    expect(buttonText).toBeDefined();
  });
  it('should render the button with the correct text', () => {
    const { getByText } = render(
      <PrimaryButton variant="Medium" icon="">
        Primary button
      </PrimaryButton>,
    );
    const buttonText = getByText('Primary button');
    expect(buttonText).toBeDefined();
  });
  it('should render the button with the correct text', () => {
    const { getByText } = render(
      <PrimaryButton variant="Big" icon="">
        Primary button
      </PrimaryButton>,
    );
    const buttonText = getByText('Primary button');
    expect(buttonText).toBeDefined();
  });
  it('should render the button with the correct text', () => {
    const { getByText } = render(
      <PrimaryButton variant="Active" icon="">
        Primary button
      </PrimaryButton>,
    );
    const buttonText = getByText('Primary button');
    expect(buttonText).toBeDefined();
  });
  it('should render the button with the correct text', () => {
    const { getByText } = render(
      <PrimaryButton variant="Disable" icon="">
        Primary button
      </PrimaryButton>,
    );
    const buttonText = getByText('Primary button');
    expect(buttonText).toBeDefined();
  });
});
