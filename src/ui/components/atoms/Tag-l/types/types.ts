export interface TagProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'outlined' | 'ghost' | 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  onClick?: () => void;
}
