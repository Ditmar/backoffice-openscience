import React from 'react';

export interface SecondaryButtonProps {
  size?: 'small' | 'medium' | 'large' | 'Enabled' | 'Focus' | 'Hover' | 'Active' | 'Disabled';
  children?: React.ReactNode;
  enabled?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  active?: boolean;
  focused?: boolean;
  hovered?: boolean;
}
