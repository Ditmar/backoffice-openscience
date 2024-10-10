import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Links from './Links';

describe('Links component', () => {
  it('should render the link with the correct text for Active variant', () => {
    const { getByText } = render(
      <Links variant="Enabled" onClick={() => {}}>
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
