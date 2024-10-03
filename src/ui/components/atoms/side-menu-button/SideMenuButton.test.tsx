import { describe, it } from 'vitest';
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
    screen.getByTestId('side-menu-button-styles'); // Asegúrate de añadir `data-testid="side-menu-button-styles"` en tu componente
  });

  it('SideMenuButton responds to hover', () => {
    render(
      <SideMenuButton icon={Icon1} color="primary">
        Article Management
      </SideMenuButton>,
    );
    fireEvent.mouseOver(screen.getByTestId('side-menu-button-styles'));
  });
});
