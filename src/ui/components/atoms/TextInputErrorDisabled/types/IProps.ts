import React from 'react';

import type { InputHTMLAttributes } from 'react';

export interface TextInputErrorDisabledProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'small' | 'medium' | 'large';
  errorMessage?: string;
  isDisabled?: boolean;
  hasError?: boolean;
  value?: string; // Asegúrate de que la propiedad value esté incluida si la necesitas
}