import React from 'react';
import TextInput from '../../atoms/TextInput/TextInput';
import DateInput from '../../atoms/DateInput/DateInput';
import ArticleInput from '../../atoms/ArticleInput/ArticleInput';
import YearInput from '../../atoms/YearInput/YearInput';
import styles from './VolumeManagement.module.scss';
import type { IProps } from './types/IProps';

// Icon imports
import emptyCalendar from '../../../../assets/icons/empty-calendar.svg?raw';
import angleDown from '../../../../assets/icons/angle-down.svg?raw';

function VolumeManagement({
  titlePlaceholder,
  datePlaceholder,
  articlePlaceholder,
  yearPlaceholder,
  onTitleChange,
  onDateChange,
  onArticleChange,
  onYearChange,
  onDateIconClick,
  onArticleIconClick,
  onYearIconClick,
}: IProps) {
  return (
    <div className={styles['volume-management__container']}>
      <TextInput label="Title" placeholder={titlePlaceholder} onChange={onTitleChange} />
      <DateInput
        label="Date"
        placeholder={datePlaceholder}
        onChange={onDateChange}
        onIconClick={onDateIconClick}
        icon={emptyCalendar}
      />
      <ArticleInput
        label="Article"
        placeholder={articlePlaceholder}
        onChange={onArticleChange}
        onIconClick={onArticleIconClick}
        icon={angleDown}
      />
      <YearInput
        label="Year"
        placeholder={yearPlaceholder}
        onChange={onYearChange}
        onIconClick={onYearIconClick}
        icon={angleDown}
      />
    </div>
  );
}

export default VolumeManagement;
