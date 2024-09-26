

  export interface CheckboxProps {
    label?: string;
    size?: 'small' | 'medium' | 'large';
    checked?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
    id?: string;  // Añadir el id como prop opcional
  }
  