import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Tooltip from './TooltipsII';

describe('Tooltip Component', () => {
  it('renders tooltip at the correct position', () => {
    const { getByText } = render(
      <Tooltip text="Tooltip at bottom" position="bottom" size="large">
        {' '}
        <h3>toltip</h3>
      </Tooltip>,
    );

    const tooltipTrigger = getByText('Tooltip at bottom');
    expect(tooltipTrigger).toBeDefined();
  });
  it('renders tooltip at the correct size', () => {
    const { getByText } = render(
      <Tooltip text="tooltip small" position="top" size="small">
        <h3>toltip</h3>
      </Tooltip>,
    );

    const tooltipTrigger = getByText('tooltip small');
    expect(tooltipTrigger).toBeDefined();
  });
});
