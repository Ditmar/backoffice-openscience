import styles from './GenericInput.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../utils/svg-icons/icons';

function GenericInput({ label, placeholder, onChange, icon, onIconClick }: IProps) {
  const inputId = label ? `generic-input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

  return (
    <div className={styles['generic-input__container']}>
      {label && (
        <label htmlFor={inputId} className={styles['generic-input__label']}>
          {label}
        </label>
      )}
      <div className={styles['generic-input__wrapper']}>
        {icon && (
          <button
            type="button"
            onClick={onIconClick}
            className={styles['generic-input__icon-button']}
            aria-label="Toggle Dropdown"
          >
            <Icon data-testid="icon" src={icon} className={styles['generic-input__icon']} />
          </button>
        )}
        <input
          id={inputId}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          className={styles['generic-input__field']}
        />
      </div>
    </div>
  );
}

export default GenericInput;
