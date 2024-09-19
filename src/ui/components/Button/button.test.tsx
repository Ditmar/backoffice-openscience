import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./button";
import { describe, expect, test, vi } from "vitest";

describe("Button component", () => {
  test("renders with label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
  // test('renders with background color', () => {
  //   render(<Button label="Click me" backgroundColor="rgb(255, 0, 0)" />);
  //   const button = screen.getByText('Click me');
  //   const computedStyle = window.getComputedStyle(button);
  //   expect(computedStyle.backgroundColor).toBe('rgb(255, 0, 0)');
  // });

  // test('renders with text color', () => {
  //   render(<Button label="Click me" color="#393939" />);
  //   const button = screen.getByText('Click me');
  //   const computedStyle = window.getComputedStyle(button);
  //   expect(computedStyle.color).toBe('#393939');
  // });

  test("renders with icon", () => {
    render(<Button label="Click me" icon={<span>+</span>} />);
    expect(screen.getByText("+")).toBeInTheDocument();
  });

  test("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
