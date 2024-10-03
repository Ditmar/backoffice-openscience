import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Links from './Links';

describe('Links component', () => {
  it('should render the link with the correct text', () => {
    const { getByText } = render(<Links variant="Small">Test Link</Links>);
    const linkText = getByText('Test Link');
    expect(linkText).toBeDefined();
  });

  it('should apply the correct variant class', () => {
    const { container } = render(<Links variant="Big">Test Link</Links>);
    expect(container.firstChild).toHaveClass('links--Big');
  });

  it('should handle onClick event', () => {
    const handleClick = vi.fn();
    const { getByText } = render(
      <Links variant="Normal" onClick={handleClick}>
        Test Link
      </Links>,
    );
    getByText('Test Link').click();
    expect(handleClick).toHaveBeenCalled();
  });

  it('should apply the visited class', () => {
    const { container } = render(<Links variant="Visited">Visited Link</Links>);
    expect(container.firstChild).toHaveClass('links--Visited');
  });

  it('should apply the disabled state', () => {
    const { container } = render(<Links variant="Disabled">Disabled Link</Links>);
    expect(container.firstChild).toHaveClass('links--Disabled');
  });
});
