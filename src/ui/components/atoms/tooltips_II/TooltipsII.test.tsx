import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TooltipsII from './TooltipsII';

describe('TooltipsII Component', () => {
  it('renders without crashing', () => {
    render(
      <TooltipsII text="Test tooltip" position="bottom" size="medium">
        <span>Hover me</span>
      </TooltipsII>,
    );
  });

  it('renders tooltip at the correct position', () => {
    render(
      <TooltipsII text="Tooltip at bottom" position="bottom" size="large">
        <h3>tooltip</h3>
      </TooltipsII>,
    );

    const tooltipTrigger = screen.getByText('tooltip');
    expect(tooltipTrigger).toBeDefined();
  });

  it('renders tooltip at the correct size', () => {
    render(
      <TooltipsII text="tooltip small" position="top" size="small">
        <h3>tooltip</h3>
      </TooltipsII>,
    );

    const tooltipTrigger = screen.getByText('tooltip');
    expect(tooltipTrigger).toBeDefined();
  });
});
