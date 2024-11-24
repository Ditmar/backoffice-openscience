export interface IEditModelButtonProps {
  text?: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  icon?: string;
}
