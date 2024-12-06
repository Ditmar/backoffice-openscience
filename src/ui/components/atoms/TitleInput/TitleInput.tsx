import styles from './TitleInput.module.scss';
import type { IProps } from './types/IProsp';

function TitleInput({ label, placeholder, onChange }: IProps) {
  const inputId = label ? `titleInput-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

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
        className={styles.input__field}
      />
    </div>
  );
}

export default TitleInput;
