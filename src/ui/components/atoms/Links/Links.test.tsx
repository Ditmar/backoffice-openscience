import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Links from './Links';

describe('Links component', () => {
  it('should render the link with the correct text for Small variant', () => {
    const { getByText } = render(
      <Links variant="Small" onClick={() => {}}>
        Link Small
      </Links>,
    );
    const linkText = getByText('Link Small');
    expect(linkText).toBeDefined();
  });

  it('should render the link with the correct text for Medium variant', () => {
    const { getByText } = render(
      <Links variant="Medium" onClick={() => {}}>
        Link Medium
      </Links>,
    );
    const linkText = getByText('Link Medium');
    expect(linkText).toBeDefined();
  });

  it('should render the link with the correct text for Big variant', () => {
    const { getByText } = render(
      <Links variant="Big" onClick={() => {}}>
        Link Big
      </Links>,
    );
    const linkText = getByText('Link Big');
    expect(linkText).toBeDefined();
  });

  it('should render the link with the correct text for Active variant', () => {
    const { getByText } = render(
      <Links variant="Active" onClick={() => {}}>
        Link Active
      </Links>,
    );
    const linkText = getByText('Link Active');
    expect(linkText).toBeDefined();
  });

  it('should render the link with the correct text for Disabled variant', () => {
    const { getByText } = render(
      <Links variant="Disabled" onClick={() => {}}>
        Link Disabled
      </Links>,
    );
    const linkText = getByText('Link Disabled');
    expect(linkText).toBeDefined();
  });
});
