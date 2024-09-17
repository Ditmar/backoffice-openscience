import React from 'react';

export interface ButtonProps {
  backgroundColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  borderRadius?: string;
  icon?: React.ReactNode; 
}
