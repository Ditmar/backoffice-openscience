import React from 'react';

export interface TextInputErrorDisabledProps {
  variant?: 'small' | 'medium' | 'large';
  errorMessage?: string;
  isDisabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Función para manejar cambios
}
