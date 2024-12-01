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
      {/* Campo de texto para el título */}
      <TextInput label="Title" placeholder={titlePlaceholder} onChange={onTitleChange} />

      {/* Campo de entrada para la fecha */}
      <DateInput
        label="Date"
        placeholder={datePlaceholder}
        onChange={onDateChange}
        onIconClick={onDateIconClick}
        icon={emptyCalendar}
      />

      {/* Campo dinámico para el artículo */}
      <GenericInput
        label="Article"
        placeholder={articlePlaceholder}
        onChange={onArticleChange}
        icon={angleDown}
        onIconClick={onArticleIconClick}
        options={['Article 1', 'Article 2', 'Article 3', 'Article 4', 'Article 5']}
      />

      {/* Campo dinámico para el año */}
      <GenericInput
        label="Year Volume"
        placeholder={yearPlaceholder}
        onChange={onYearChange}
        icon={angleDown}
        onIconClick={onYearIconClick}
        options={['2020', '2021', '2022', '2023', '2024']}
      />
    </div>
  );
}

export default VolumeManagement;
