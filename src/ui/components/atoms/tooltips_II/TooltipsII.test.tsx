import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TooltipsII from './TooltipsII';

describe('TooltipsII Component', () => {
  it('renders without crashing', () => {
    render(
      <TooltipsII text="Test tooltip" variant="bottom" size="medium">
        <span>Hover me</span>
      </TooltipsII>,
    );
    const tooltipTrigger = screen.getByText('Hover me');
    expect(tooltipTrigger).toBeTruthy();
  });

  describe('Position Variants', () => {
    it('renders tooltip at the top', () => {
      render(
        <TooltipsII text="Tooltip at top" variant="top" size="medium">
          <span>Hover me</span>
        </TooltipsII>,
      );
      const tooltipTrigger = screen.getByText('Hover me');
      expect(tooltipTrigger).toBeTruthy();
    });

    it('renders tooltip at the bottom', () => {
      render(
        <TooltipsII text="Tooltip at bottom" variant="bottom" size="large">
          <h3>tooltip</h3>
        </TooltipsII>,
      );
      const tooltipTrigger = screen.getByText('tooltip');
      expect(tooltipTrigger).toBeTruthy();
    });

    it('renders tooltip at the left', () => {
      render(
        <TooltipsII text="Tooltip at left" variant="left" size="medium">
          <span>Hover me</span>
        </TooltipsII>,
      );
      const tooltipTrigger = screen.getByText('Hover me');
      expect(tooltipTrigger).toBeTruthy();
    });

    it('renders tooltip at the right', () => {
      render(
        <TooltipsII text="Tooltip at right" variant="right" size="medium">
          <span>Hover me</span>
        </TooltipsII>,
      );
      const tooltipTrigger = screen.getByText('Hover me');
      expect(tooltipTrigger).toBeTruthy();
    });
  });

  describe('Size Variants', () => {
    it('renders small tooltip', () => {
      render(
        <TooltipsII text="Small Tooltip" variant="bottom" size="small">
          <span>Hover me</span>
        </TooltipsII>,
      );
      const tooltipTrigger = screen.getByText('Hover me');
      expect(tooltipTrigger).toBeTruthy();
    });

    it('renders medium tooltip', () => {
      render(
        <TooltipsII text="Medium Tooltip" variant="bottom" size="medium">
          <span>Hover me</span>
        </TooltipsII>,
      );
      const tooltipTrigger = screen.getByText('Hover me');
      expect(tooltipTrigger).toBeTruthy();
    });

    it('renders large tooltip', () => {
      render(
        <TooltipsII text="Large Tooltip" variant="bottom" size="large">
          <span>Hover me</span>
        </TooltipsII>,
      );
      const tooltipTrigger = screen.getByText('Hover me');
      expect(tooltipTrigger).toBeTruthy();
    });
  });

  describe('Visibility on Hover', () => {
    it('shows tooltip content on hover', () => {
      render(
        <TooltipsII text="Tooltip content" variant="bottom" size="medium">
          <span>Hover me</span>
        </TooltipsII>,
      );

      const tooltipTrigger = screen.getByText('Hover me');
      fireEvent.mouseOver(tooltipTrigger);

      const tooltipContent = screen.getByText('Tooltip content');
      expect(tooltipContent).toBeTruthy();
    });
  });

  describe('Long Text Rendering', () => {
    it('renders long text in the tooltip', () => {
      render(
        <TooltipsII
          text="Brief definition of the underlined word abode"
          variant="bottom"
          size="small"
        >
          <span>Hover me</span>
        </TooltipsII>,
      );

      const tooltipTrigger = screen.getByText('Hover me');
      fireEvent.mouseOver(tooltipTrigger);

      const tooltipContent = screen.getByText('Brief definition of the underlined word abode');
      expect(tooltipContent).toBeTruthy();
    });
  });
});
