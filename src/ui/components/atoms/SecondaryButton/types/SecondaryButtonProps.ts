import React from 'react';

export interface SecondaryButtonProps {
  variant?: 'small' | 'medium' | 'large' | 'White' | 'active' | 'disabled';
  children?: React.ReactNode;
  onClick?: () => void;
  display: string;
}
