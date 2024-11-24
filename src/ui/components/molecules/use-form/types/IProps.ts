import type { ChangeEvent } from 'react';

export interface IProps {
  id?: string;
  label: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
