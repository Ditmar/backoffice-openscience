export interface GhostButtonProps {
  ghostbutton: string;
  variant: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}
