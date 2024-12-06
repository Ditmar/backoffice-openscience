import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TrueFalseButton from './True-False-Button';

describe('PrimaryButton component', () => {
  it('should render the button with the correct text', () => {
    const { getByText } = render(<TrueFalseButton variant="True">True</TrueFalseButton>);
    const buttonText = getByText('True');
    expect(buttonText).toBeDefined();
  });
  it('should render the button with the correct text', () => {
    const { getByText } = render(<TrueFalseButton variant="False">False</TrueFalseButton>);
    const buttonText = getByText('False');
    expect(buttonText).toBeDefined();
  });
});
