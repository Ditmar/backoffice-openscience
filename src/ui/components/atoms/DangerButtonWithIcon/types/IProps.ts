import React from 'react';

export interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'enabled' | 'hover' | 'active' | 'focus' | 'disable';
  icon?: string;
}
