import React from 'react';
import TextInput from '../../atoms/TextInput/TextInput';
import DateInput from '../../atoms/DateInput/DateInput';
import ArticleInput from '../../atoms/ArticleInput/ArticleInput';
import YearInput from '../../atoms/YearInput/YearInput';
import styles from './VolumeManagement.module.scss';
import type { IProps } from './types/IProps';
import emptyCalendar from '../../../../assets/icons/empty-calendar.svg?raw';
import angleDown from '../../../../assets/icons/angle-down.svg?raw';

function VolumeManagement({ onFieldChange }: Omit<IProps, 'title' | 'date' | 'article' | 'year'>) {
  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onFieldChange(field, event.target.value);
  };

  return (
    <div className={styles['volume-management__container']}>
      <div className={styles['volume-management__field']}>
        <TextInput label="Title" placeholder="Enter title" onChange={handleChange('title')} />
      </div>
      <div className={styles['volume-management__field']}>
        <DateInput
          label="Date"
          placeholder="Select a date"
          onChange={handleChange('date')}
          icon={emptyCalendar}
        />
      </div>
      <div className={styles['volume-management__field']}>
        <ArticleInput
          label="Article"
          placeholder="Enter article"
          onChange={handleChange('article')}
          icon={angleDown}
        />
      </div>
      <div className={styles['volume-management__field']}>
        <YearInput
          label="Year"
          placeholder="Enter year"
          onChange={handleChange('year')}
          icon={angleDown}
        />
      </div>
    </div>
  );
}

export default VolumeManagement;
