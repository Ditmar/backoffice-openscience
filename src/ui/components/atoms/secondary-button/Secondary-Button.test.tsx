import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SecondaryButton from './Secondary-Button';

describe('SecondaryButton component', () => {
  it('renders with the correct text for Small variant', () => {
    const { getByText } = render(
      <SecondaryButton variant="Small" icon="">
        Secondary button
      </SecondaryButton>,
    );
    expect(getByText('Secondary button')).toBeDefined();
  });

  it('renders with the correct text for Medium variant', () => {
    const { getByText } = render(
      <SecondaryButton variant="Medium" icon="">
        Secondary button
      </SecondaryButton>,
    );
    expect(getByText('Secondary button')).toBeDefined();
  });

  it('renders with the correct text for Big variant', () => {
    const { getByText } = render(
      <SecondaryButton variant="Big" icon="">
        Secondary button
      </SecondaryButton>,
    );
    expect(getByText('Secondary button')).toBeDefined();
  });

  it('renders with the correct text for Active variant', () => {
    const { getByText } = render(
      <SecondaryButton variant="Active" icon="">
        Secondary button
      </SecondaryButton>,
    );
    expect(getByText('Secondary button')).toBeDefined();
  });

  it('renders with the correct text for Disabled variant', () => {
    const { getByText } = render(
      <SecondaryButton variant="Disabled" icon="">
        Secondary button
      </SecondaryButton>,
    );
    expect(getByText('Secondary button')).toBeDefined();
  });
});
