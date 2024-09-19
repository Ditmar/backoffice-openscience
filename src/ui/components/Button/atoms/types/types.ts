export interface ButtonProps {
    backgroundColor?: string;
    hover?: string | null; 
    active?: string | null; 
    focus?: string | null; 
    color?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    borderRadius?: string;
    icon?: React.ReactNode; 
  }
  
  