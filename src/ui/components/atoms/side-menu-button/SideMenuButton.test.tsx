import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SideMenuButton from './SideMenuButton';

describe('Testing for SideMenuButton component', () => {
  it('SideMenuButton is rendering', () => {
    render(
      <SideMenuButton icon="article-management" color="primary" basePath="/" path="/">
        Article Management
      </SideMenuButton>,
    );
  });

  it('SideMenuButton has title "Article Management"', () => {
    render(
      <SideMenuButton icon="article-management" color="primary" basePath="/" path="/">
        Article Management
      </SideMenuButton>,
    );
    screen.getByText('Article Management');
  });

  it('SideMenuButton has title "Author Management"', () => {
    render(
      <SideMenuButton icon="author-management" color="primary" basePath="/" path="/">
        Author Management
      </SideMenuButton>,
    );
    screen.getByText('Author Management');
  });

  it('SideMenuButton has styles', () => {
    render(
      <SideMenuButton icon="article-management" color="primary" basePath="/" path="/">
        Article Management
      </SideMenuButton>,
    );
    screen.getByTestId('side-menu-button-styles');
  });

  it('SideMenuButton responds to hover', () => {
    render(
      <SideMenuButton icon="article-management" color="primary" basePath="/" path="/">
        Article Management
      </SideMenuButton>,
    );
    fireEvent.mouseOver(screen.getByTestId('side-menu-button-styles'));
  });
});
