import type { ChangeEvent } from 'react';

export interface IProps {
  titlePlaceholder?: string;
  datePlaceholder?: string;
  articlePlaceholder?: string;
  yearPlaceholder?: string;
  onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDateChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onArticleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onYearChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDateIconClick?: () => void;
  onArticleIconClick?: () => void;
  onYearIconClick?: () => void;
}
