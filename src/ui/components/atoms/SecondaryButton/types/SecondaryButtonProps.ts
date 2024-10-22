import React from 'react';

export interface SecondaryButtonProps {
  variant?: 'small' | 'medium' | 'large' | 'active' | 'disabled';
  children?: React.ReactNode;
  onClick?: () => void;
  display: string;
}
