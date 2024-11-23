import { useState } from 'react';
import styles from './Toggle.module.scss';

export interface ToggleProps {
  label?: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

function Toggle({ label = '', disabled = false, onChange }: ToggleProps) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    if (!disabled) {
      setChecked(!checked);
      if (onChange) onChange(!checked);
    }
  };

  return (
    <div
      className={`
    ${styles.container} 
    ${disabled ? styles.disabled : ''}
    `}
    >
      {label && (
        <label htmlFor="toggle-button" className={styles.label}>
          {' '}
          {label}
        </label>
      )}
      <button
        id="toggle-button"
        className={`
          ${styles.toggle} 
          ${checked ? styles.checked : ''}
          `}
        onClick={handleToggle}
        disabled={disabled}
        aria-pressed={checked}
        aria-label={label || 'Toggle'}
      >
        <span className={styles.slider} />
      </button>
    </div>
  );
}

Toggle.defaultProps = {
  label: '',
  disabled: false,
  onChange: undefined,
};

export default Toggle;
