import type { ChangeEvent } from 'react';

export interface IProps {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
