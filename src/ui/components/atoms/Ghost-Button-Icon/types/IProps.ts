import React from 'react';

export interface IProps {
  children: React.ReactNode;
  variant?: 'ghost-primary' | 'ghost-secondary' | 'ghost-tertiary' | 'ghost-disabled';
  onClick?: () => void;
}
