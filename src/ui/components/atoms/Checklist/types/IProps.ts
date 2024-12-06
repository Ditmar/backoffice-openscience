import type React from 'react';

export interface IProps extends React.ComponentProps<'select'> {
  items: string[];
  onCheck: (item: string) => void;
  number?: number[];
  SelectCategory: (number: string) => void;
}
