import React, { useState } from 'react';
import styles from './DateInput.module.scss';
import { Icon } from '../../utils/svg-icons/icons';
import type { IProps } from './types/IProps';

function DateInput({ label, placeholder, onChange, icon }: IProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateClick = (day: number) => {
    const formattedDate = `${String(day).padStart(2, '0')}/${String(selectedMonth + 1).padStart(
      2,
      '0',
    )}/${selectedYear}`;
    setSelectedDate(formattedDate);
    setShowCalendar(false);
    onChange({ target: { value: formattedDate } } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(Number(e.target.value));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(e.target.value));
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <div className={styles['date-input__calendar']}>
        <div className={styles['date-input__selectors']}>
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className={styles['date-input__select']}
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i} value={i}>
                {new Date(0, i).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </select>
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className={styles['date-input__select']}
          >
            {Array.from({ length: 21 }, (_, i) => {
              const year = new Date().getFullYear() - 10 + i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles['date-input__days']}>
          {days.map((day) => (
            <button
              key={day}
              type="button"
              className={styles['date-input__calendar-day']}
              onClick={() => {
                handleDateClick(day);
              }}
              aria-label={`Select day ${day}`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles['date-input__container']}>
      {/* Título visible con label */}
      {label && (
        <label htmlFor="date-input" className={styles['date-input__label']}>
          {label}
        </label>
      )}
      <div className={styles['date-input__wrapper']}>
        {icon && (
          <button
            type="button"
            onClick={toggleCalendar}
            className={styles['date-input__icon-button']}
            aria-label="Toggle calendar"
          >
            <Icon src={icon} className={styles['date-input__icon']} />
          </button>
        )}
        {/* Asociar el input con el label utilizando htmlFor */}
        <input
          type="text"
          id="date-input"
          value={selectedDate ?? ''}
          placeholder={placeholder}
          onChange={onChange}
          className={styles['date-input__field']}
          readOnly
        />
      </div>
      {showCalendar && renderCalendar()}
    </div>
  );
}

export default DateInput;
