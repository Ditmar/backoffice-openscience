export interface TagProps {
    label: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'default' | 'outlined' | 'ghost';
    disabled?: boolean;
    onClick?: () => void;
  }
  