import React from 'react';

export interface RadioButtonProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  id?: string;
}
