import styles from './YearInput.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../utils/svg-icons/icons';

function YearInput({ label, placeholder, onChange, icon, onIconClick }: IProps) {
  const yearInputId = label ? `year-input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

  return (
    <div className={styles['year-input__container']}>
      {label && (
        <label htmlFor={yearInputId} className={styles['year-input__label']}>
          {label}
        </label>
      )}
      <div className={styles['year-input__wrapper']}>
        {icon && (
          <button
            type="button"
            onClick={onIconClick}
            className={styles['year-input__icon-button']}
            aria-label="Toggle Dropdown"
          >
            <Icon data-testid="angle-down" src={icon} className={styles['year-input__icon']} />
          </button>
        )}
        <input
          id={yearInputId}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          className={styles['year-input__field']}
        />
      </div>
    </div>
  );
}

export default YearInput;
