import React, { useState, useRef } from 'react';
import styles from './GenericInput.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../utils/svg-icons/icons';

function GenericInput({ label, placeholder, onChange, icon, onIconClick, options }: IProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null); // Referencia para el input

  const inputId = label ? `generic-input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

  const handleIconClick = () => {
    setShowOptions(!showOptions);
    if (onIconClick) onIconClick();
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setInputValue(option); // Set the selected option as the input value
    setShowOptions(false);
    onChange({ target: { value: option } } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event);
  };

  // Función para obtener la posición del dropdown
  const getDropdownPosition = () => {
    if (inputRef.current) {
      const { top, left, height } = inputRef.current.getBoundingClientRect();
      return {
        top: top + height + window.scrollY, // posición inferior del input
        left: left + window.scrollX, // posición horizontal del input
      };
    }
    return { top: 0, left: 0 };
  };

  const dropdownPosition = getDropdownPosition();

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
            onClick={handleIconClick}
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
          value={inputValue || selectedOption}
          onChange={handleInputChange}
          className={styles['generic-input__field']}
          ref={inputRef} // Referencia al input
          readOnly
        />
      </div>
      {showOptions && options && (
        <div
          className={styles['generic-input__dropdown']}
          style={{
            top: `${dropdownPosition.top}px`, // Posicionar dinámicamente el dropdown
            left: `${dropdownPosition.left}px`, // Posicionar horizontalmente
          }}
          role="listbox"
          tabIndex={0}
        >
          {options.map((option) => (
            <div
              key={option}
              className={styles['generic-input__dropdown-option']}
              onClick={() => {
                handleOptionSelect(option);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOptionSelect(option);
                }
              }}
              role="option"
              tabIndex={0}
              aria-selected={selectedOption === option}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GenericInput;
