import React from 'react';

export interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'Small' | 'Medium' | 'Big' | 'Active' | 'Disable' | 'Centered';
  icon?: string;
  display?: string;
}
