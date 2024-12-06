export interface IVolumeManagementProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onEdit: () => void;
  onConfigure: () => void;
  placeholderSize?: 'small' | 'medium' | 'large';
}
