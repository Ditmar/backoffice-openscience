import type { ChangeEvent } from 'react';

export interface IProps {
  label?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  onIconClick?: () => void;
}
