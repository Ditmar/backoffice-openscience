import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { TabLabel } from './TabLabel';

describe('Testing for TabLabel component ', () => {
  it('TabLabel is rendering', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
  });

  it('TabLabel has a title', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a small variant', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a medium variant', () => {
    render(<TabLabel text="TabLabel" isEnable variant="medium" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a large variant', () => {
    render(<TabLabel text="TabLabel" isEnable variant="large" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a disabled state', () => {
    render(<TabLabel text="TabLabel" isEnable={false} variant="small" />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a selected state', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" isSelect />);
    screen.getByText('TabLabel');
  });

  it('TabLabel has a active state', () => {
    render(<TabLabel text="TabLabel" isEnable variant="small" />);
    screen.getByText('TabLabel');
  });
});
