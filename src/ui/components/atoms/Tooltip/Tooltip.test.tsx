import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Tooltip } from './Tooltip';
import '@testing-library/jest-dom';

describe('Tooltip component', () => {
  it('renders the text passed as prop', () => {
    render(<Tooltip text="Hover me!" toolTipText="Tooltip content" />);
    const textElement = screen.getByText(/Hover me!/i);
    expect(textElement).toBeInTheDocument();
  });

  it('applies the correct class for the small variant', () => {
    render(<Tooltip text="Hover me!" toolTipText="Tooltip content" variant="small" />);

    const smallTooltip = screen.getByText(/Tooltip content/i);
    expect(smallTooltip.className).toContain('small');
  });

  it('applies the correct class for the medium variant', () => {
    render(<Tooltip text="Hover me!" toolTipText="Tooltip content" variant="medium" />);

    const mediumTooltip = screen.getByText(/Tooltip content/i);
    expect(mediumTooltip.className).toContain('medium');
  });

  it('applies the correct class for the large variant', () => {
    render(<Tooltip text="Hover me!" toolTipText="Tooltip content" variant="large" />);

    const largeTooltip = screen.getByText(/Tooltip content/i);
    expect(largeTooltip.className).toContain('large');
  });

  it('renders the tooltip text on hover', async () => {
    const user = userEvent.setup();

    render(<Tooltip text="Hover me!" toolTipText="Tooltip content" />);

    const hoverElement = screen.getByText(/Hover me!/i);
    await user.hover(hoverElement);

    const tooltip = screen.getByText(/Tooltip content/i);
    expect(tooltip).toBeVisible();
  });
});
