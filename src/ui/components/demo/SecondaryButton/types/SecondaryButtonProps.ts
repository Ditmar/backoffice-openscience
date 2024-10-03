export interface SecondaryButtonProps {
  size?: 'small' | 'medium' | 'large';
  hover?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  active?: boolean;
  focused?: boolean;
  hovered?: boolean;
}
