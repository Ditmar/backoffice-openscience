import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ButtonSubmit from './ButtonSubmit';

describe('Testing ButtonSubmit React Component', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<ButtonSubmit>Submit</ButtonSubmit>);
    const buttonText = getByText('Submit');
    expect(buttonText).toBeDefined();
  });
});
