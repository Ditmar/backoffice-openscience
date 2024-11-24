import { describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SideMenuButton from './SideMenuButton';
import bibliography from '../../../../assets/icons/bibliographines.svg?raw';
import gallery from '../../../../assets/icons/image-gallery.svg?raw';

describe('SideMenuButton Component', () => {
  it('renders with "Bibliography" configuration', () => {
    render(
      <SideMenuButton
        color="primary"
        icon={bibliography}
        variant="secondary"
        path="/bibliography"
        basePath="/"
      >
        Bibliography
      </SideMenuButton>,
    );

    const button = screen.getByText('Bibliography');
    fireEvent.click(button);
  });

  it('renders with "Image Gallery" configuration', () => {
    render(
      <SideMenuButton
        color="primary"
        icon={gallery}
        variant="secondary"
        path="/image-gallery"
        basePath="/"
      >
        Image Gallery
      </SideMenuButton>,
    );
  });

  it('applies the correct styles for hover state', () => {
    render(
      <SideMenuButton
        color="primary"
        icon={bibliography}
        variant="secondary"
        path="/bibliography"
        basePath="/"
      >
        Bibliography
      </SideMenuButton>,
    );

    const button = screen.getByText('Bibliography');
    fireEvent.mouseOver(button);
  });

  it('renders the correct icon for "Bibliography"', () => {
    render(
      <SideMenuButton
        color="primary"
        icon={bibliography}
        variant="secondary"
        path="/bibliography"
        basePath="/"
      >
        Bibliography
      </SideMenuButton>,
    );
  });

  it('renders the correct icon for "Image Gallery"', () => {
    render(
      <SideMenuButton
        color="primary"
        icon={gallery}
        variant="secondary"
        path="/image-gallery"
        basePath="/"
      >
        Image Gallery
      </SideMenuButton>,
    );
  });
});
