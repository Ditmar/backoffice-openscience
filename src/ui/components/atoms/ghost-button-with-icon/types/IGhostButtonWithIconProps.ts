import React from 'react';

export interface IGhostButtonWithIconProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'small' | 'medium' | 'large' | 'active' | 'disabled';
  icon?: string;
  display: string;
}
