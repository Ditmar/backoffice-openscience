import styles from './Placeholder.module.scss';
import type { IProps } from './types/IProps';

function Placeholder({ placeholder, onChange }: IProps) {
  return (
    <input
      type="text"
      className={styles.input__field}
      placeholder={placeholder}
      onChange={onChange}
      aria-label="Search input"
      data-testid="input-field"
    />
  );
}

export default Placeholder;
