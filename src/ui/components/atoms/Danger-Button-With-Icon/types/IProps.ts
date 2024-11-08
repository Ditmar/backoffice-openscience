import React from 'react';

export interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'Small' | 'Medium' | 'Big' | 'Active' | 'Disable';
  icon?: string;
  display?: string;
}
