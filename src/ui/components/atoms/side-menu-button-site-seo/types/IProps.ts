import React from 'react';

export interface IProps {
  children: React.ReactNode;
  variant?: string;
  icon: string;
  color?: 'primary' | 'secondary';
  className?: string;
  path: string;
  basePath: string;
  onClick?: () => void;
}
