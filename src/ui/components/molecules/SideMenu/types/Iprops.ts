export interface ISideMenuProps {
  menuItems: {
    id: number | string;
    title: string;
    icon: string;
    path: string;
    basePath: string;
    name?: string;
  }[];
  onClick: () => void;
}
