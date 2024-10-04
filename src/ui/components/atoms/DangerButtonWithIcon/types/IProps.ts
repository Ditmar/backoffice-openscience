import React from 'react';

export interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'Enabled' | 'Hover' | 'Active' | 'Focus' | 'Disable';
  icon?: string;
}
