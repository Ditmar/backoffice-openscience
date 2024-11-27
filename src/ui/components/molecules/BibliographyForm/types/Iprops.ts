import type { ChangeEvent } from 'react';

export interface IProps {
  ids?: string;
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
