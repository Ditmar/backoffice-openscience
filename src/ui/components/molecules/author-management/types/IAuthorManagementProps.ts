export interface IAuthorManagementProps {
  onEdit: () => void;
  onConfigure: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}
