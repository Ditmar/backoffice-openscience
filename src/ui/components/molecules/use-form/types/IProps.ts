import React from 'react';

export interface IProps {
  placeholderText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ariaLabel?: string;
  onSearchClick?: () => void;
}
