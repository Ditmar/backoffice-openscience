import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SideMenuButtonSiteSeo from './SideMenuButtonSiteSeo';

describe('Testing for SideMenuButtonSiteSeo component', () => {
  it('SideMenuButtonSiteSeo is rendering', () => {
    render(
      <SideMenuButtonSiteSeo icon="site-configuration" color="primary" basePath="/" path="/">
        Site Configuration
      </SideMenuButtonSiteSeo>,
    );
  });

  it('SideMenuButtonSiteSeo has title "Site Configuration"', () => {
    render(
      <SideMenuButtonSiteSeo icon="site-configuration" color="primary" basePath="/" path="/">
        Site Configuration
      </SideMenuButtonSiteSeo>,
    );
    screen.getByText('Site Configuration');
  });

  it('SideMenuButtonSiteSeo has title "SEO Settings"', () => {
    render(
      <SideMenuButtonSiteSeo icon="seo-settings" color="primary" basePath="/" path="/">
        SEO Settings
      </SideMenuButtonSiteSeo>,
    );
    screen.getByText('SEO Settings');
  });

  it('SideMenuButtonSiteSeo has styles', () => {
    render(
      <SideMenuButtonSiteSeo icon="site-configuration" color="primary" basePath="/" path="/">
        Site Configuration
      </SideMenuButtonSiteSeo>,
    );
    screen.getByTestId('side-menu-button-styles');
  });

  it('SideMenuButtonSiteSeo responds to hover', () => {
    render(
      <SideMenuButtonSiteSeo icon="site-configuration" color="primary" basePath="/" path="/">
        Site Configuration
      </SideMenuButtonSiteSeo>,
    );
    fireEvent.mouseOver(screen.getByTestId('side-menu-button-styles'));
  });
});
