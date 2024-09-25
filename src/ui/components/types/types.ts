export interface ButtonProps {
    button: string;
    variant: 'default' | 'hover' | 'active' | 'focus' | 'disabled';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
  }
  