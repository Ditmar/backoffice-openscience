import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SideMenu from './SideMenu';
import type { ISideMenuProps } from './types/Iprops';
import styles from './SideMenu.module.scss';
import menuItemsMock from './__mock__/menuItemsMock.json';

vi.mock('../../../../assets/icons/content-management.svg?raw', () => ({
  default: 'test-file-stub',
}));
vi.mock('../../../../assets/icons/article-management.svg?raw', () => ({
  default: 'test-file-stub',
}));
vi.mock('../../../../assets/icons/author-management.svg?raw', () => ({
  default: 'test-file-stub',
}));
vi.mock('../../../../assets/icons/bibliographines.svg?raw', () => ({ default: 'test-file-stub' }));
vi.mock('../../../../assets/icons/image-gallery.svg?raw', () => ({ default: 'test-file-stub' }));
vi.mock('../../../../assets/icons/index-builder.svg?raw', () => ({ default: 'test-file-stub' }));
vi.mock('../../../../assets/icons/volume-management.svg?raw', () => ({
  default: 'test-file-stub',
}));
vi.mock('../../../../assets/icons/site-configuration.svg?raw', () => ({
  default: 'test-file-stub',
}));
vi.mock('../../../../assets/icons/seo-settings.svg?raw', () => ({ default: 'test-file-stub' }));
vi.mock('../../../../assets/icons/dinamicBannerManagement.svg?raw', () => ({
  default: 'test-file-stub',
}));
vi.mock('../../../../assets/icons/user-management.svg?raw', () => ({ default: 'test-file-stub' }));

const mockMenuItems: ISideMenuProps['menuItems'] = menuItemsMock.data;

const defaultProps: ISideMenuProps = {
  menuItems: mockMenuItems,
  onClick: vi.fn(),
};

describe('Testing for SideMenu component', () => {
  it('renders the SideMenu component', () => {
    render(<SideMenu menuItems={defaultProps.menuItems} onClick={defaultProps.onClick} />);
    expect(screen.getByText('HIDE MENU')).toBeTruthy();
  });

  it('toggles menu collapse state', () => {
    render(<SideMenu menuItems={defaultProps.menuItems} onClick={defaultProps.onClick} />);
    const button = screen.getByText('HIDE MENU');
    fireEvent.click(button);
    expect(screen.queryByText('HIDE MENU')).toBeNull();
    const menu = screen.getByTestId('side-menu');
    expect(menu.classList.contains(styles.collapsed)).toBe(true);
  });

  it('renders menu items', () => {
    render(<SideMenu menuItems={defaultProps.menuItems} onClick={defaultProps.onClick} />);
    mockMenuItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeTruthy();
    });
  });
});
