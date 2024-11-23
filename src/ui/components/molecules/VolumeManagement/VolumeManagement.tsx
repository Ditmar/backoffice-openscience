import React from 'react';
import TextInput from '../../atoms/TextInput/TextInput';
import DateInput from '../../atoms/DateInput/DateInput';
import GenericInput from '../../atoms/GenericInput/GenericInput'; // Importa el nuevo componente
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
      {/* Aquí se reemplazan los antiguos ArticleInput y YearInput por GenericInput */}
      <GenericInput
        label="article"
        placeholder={articlePlaceholder}
        onChange={onArticleChange}
        icon={angleDown}
        onIconClick={onArticleIconClick}
      />
      <GenericInput
        label="year_volume"
        placeholder={yearPlaceholder}
        onChange={onYearChange}
        icon={angleDown}
        onIconClick={onYearIconClick}
      />
    </div>
  );
}

export default VolumeManagement;
