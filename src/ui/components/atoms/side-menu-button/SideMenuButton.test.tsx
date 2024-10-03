import { describe, it, vi, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SideMenuButton from './SideMenuButton';
import Icon1 from '../../../../assets/icons/article-management.svg?raw';
import Icon2 from '../../../../assets/icons/author-management.svg?raw';

describe('Testing for SideMenuButton component', () => {
  it('SideMenuButton is rendering', () => {
    render(
      <SideMenuButton icon={Icon1} color="primary">
        Article Management
      </SideMenuButton>,
    );
  });

  it('SideMenuButton has title "Article Management"', () => {
    render(
      <SideMenuButton icon={Icon1} color="primary">
        Article Management
      </SideMenuButton>,
    );
    screen.getByText('Article Management');
  });

  it('SideMenuButton has title "Author Management"', () => {
    render(
      <SideMenuButton icon={Icon2} color="primary">
        Author Management
      </SideMenuButton>,
    );
    screen.getByText('Author Management');
  });

  it('SideMenuButton has styles', () => {
    render(
      <SideMenuButton icon={Icon1} color="primary">
        Article Management
      </SideMenuButton>,
    );
    screen.getByTestId('side-menu-button-styles');
  });

  it('SideMenuButton responds to hover', () => {
    render(
      <SideMenuButton icon={Icon1} color="primary">
        Article Management
      </SideMenuButton>,
    );
    fireEvent.mouseOver(screen.getByTestId('side-menu-button-styles'));
  });

  it('SideMenuButton registers click action', () => {
    const onClick = vi.fn();

    render(
      <SideMenuButton icon={Icon1} color="primary" onClick={onClick}>
        Article Management
      </SideMenuButton>,
    );

    fireEvent.click(screen.getByTestId('side-menu-button-styles'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
