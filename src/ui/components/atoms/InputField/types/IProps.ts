import type { ChangeEvent, CSSProperties } from 'react';

export interface IProps {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
}
