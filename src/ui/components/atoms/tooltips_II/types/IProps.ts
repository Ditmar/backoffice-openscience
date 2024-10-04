import React from 'react';

export interface IProps {
  text: string;
  children: React.ReactNode;
  position: 'top' | 'bottom' | 'left' | 'right';
  size: 'small' | 'medium' | 'large';
}
