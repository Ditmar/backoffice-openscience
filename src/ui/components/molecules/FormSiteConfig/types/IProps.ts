import type { ChangeEvent } from 'react';

export interface IProps {
  data: {
    label: string;
    data: string;
  }[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
