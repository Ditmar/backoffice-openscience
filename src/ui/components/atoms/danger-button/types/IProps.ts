import React from 'react';

export interface IProps {
  children: React.ReactNode;
  variant?: 'danger-primary' | 'danger-secondary' | 'danger-tertiary' | 'danger-disabled';
  onClick?: () => void;
}
