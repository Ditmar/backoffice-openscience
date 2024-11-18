export interface IVolumeManagementProps {
  onEdit: () => void;
  onConfigure: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  icon?: string;
  isBurger?: boolean;
}
