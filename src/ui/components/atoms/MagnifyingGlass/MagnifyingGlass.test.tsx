import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import MagnifyingGlass from './MagnifyingGlass';
import search from '../../../../assets/icons/search.svg?raw';

describe('MagnifyingGlass', () => {
  it('calls the onClick function when the button is clicked', () => {
    let onClickCalled = false;
    const onClick = () => {
      onClickCalled = true;
    };

    const { getByRole } = render(<MagnifyingGlass onClick={onClick} icon={search} />);

    const button = getByRole('button');
    fireEvent.click(button);

    expect(onClickCalled).toBe(true);
  });
});
