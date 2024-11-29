import React from 'react';

export interface LinksIprops {
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  isFocused: boolean;
  href?: string;
}
