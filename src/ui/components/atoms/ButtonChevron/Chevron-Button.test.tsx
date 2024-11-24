import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ChevronButton from './Chevron-Button';

describe('ChevronButton', () => {
  it('calls the onClick function when the button is clicked', () => {
    let onClickCalled = false;
    const onClick = () => {
      onClickCalled = true;
    };
    const { getByRole } = render(<ChevronButton onClick={onClick} />);

    const button = getByRole('button');
    fireEvent.click(button);

    expect(onClickCalled).toBe(true);
  });
});
