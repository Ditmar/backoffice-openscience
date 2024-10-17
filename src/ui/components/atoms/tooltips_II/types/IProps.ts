import React from 'react';

export interface IProps {
  children: React.ReactElement<{ className?: string }>;
  variant?: 'top' | 'bottom' | 'left' | 'right';
  text?: string;
  size?: 'small' | 'medium' | 'large';
}
