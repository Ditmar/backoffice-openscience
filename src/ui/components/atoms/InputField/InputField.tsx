import styles from './InputField.module.scss';
import type { IProps } from './types/IProps';

function InputField({ placeholder, onChange, style }: IProps) {
  return (
    <input
      type="text"
      className={styles.input__field}
      placeholder={placeholder}
      onChange={onChange}
      style={style}
      aria-label="Search input"
      data-testid="input-field"
    />
  );
}

export default InputField;
