import styles from './DateInput.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../utils/svg-icons/icons';

function DateInput({ label, placeholder, onChange, icon, onIconClick }: IProps) {
  const dateInputId = label ? `date-input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

  return (
    <div className={styles['date-input__container']}>
      {label && (
        <label htmlFor={dateInputId} className={styles['date-input__label']}>
          {label}
        </label>
      )}
      <div className={styles['date-input__wrapper']}>
        {icon && (
          <button
            type="button"
            onClick={onIconClick}
            className={styles['date-input__icon-button']}
            aria-label="Icon button"
          >
            <Icon data-testid="empty-calendar" src={icon} className={styles['date-input__icon']} />
          </button>
        )}
        <input
          id={dateInputId}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          className={styles['date-input__field']}
        />
      </div>
    </div>
  );
}

export default DateInput;
