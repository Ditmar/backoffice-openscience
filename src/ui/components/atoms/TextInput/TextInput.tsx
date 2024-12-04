import styles from './TextInput.module.scss';
import type { IProps } from './types/IProps';

function TextInput({ label, placeholder, onChange, onFocus, value, size = 'medium' }: IProps) {
  const inputId = label ? `textInput-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;
  return (
    <div className={styles.input__container}>
      {label && (
        <label htmlFor={inputId} className={styles.input__label}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        className={`${styles.input__field} ${styles[size]}`}
      />
    </div>
  );
}
export default TextInput;
