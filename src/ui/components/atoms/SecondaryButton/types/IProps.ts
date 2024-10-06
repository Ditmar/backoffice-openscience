import React from 'react';

export interface IProps {
  label: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'inherit' | 'default' | 'text';
  state: 'enabled' | 'hover' | 'active' | 'focus' | 'disabled';
  onClick?: () => void;
  icon?: React.ReactNode;
}
