import React from 'react';

export interface RadioButtonProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  id?: string;
}
