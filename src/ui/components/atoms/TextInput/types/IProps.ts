import type { ChangeEvent, FocusEvent } from 'react';

export interface IProps {
  label?: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  value?: string;
  size?: 'small' | 'medium' | 'large';
}
