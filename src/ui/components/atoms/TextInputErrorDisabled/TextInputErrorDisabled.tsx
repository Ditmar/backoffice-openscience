import classNames from 'classnames';
import styles from './TextInputErrorDisabled.module.scss';
import type { TextInputErrorDisabledProps } from './types/IProps';

function TextInputErrorDisabled({
  variant = 'medium',
  errorMessage,
  isDisabled,
  placeholder,
  value,
  onChange,
}: TextInputErrorDisabledProps) {
  return (
    <div className={styles.inputwrapper}>
      <div className={styles.inputcontainer}>
        <input
          className={classNames(styles.input, {
            [styles.error]: errorMessage,
            [styles.disabled]: isDisabled,
            [styles[variant]]: variant,
          })}
          aria-invalid={!!errorMessage}
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {errorMessage && !isDisabled && (
        <p className={styles.errormessage} role="alert" aria-live="assertive">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default TextInputErrorDisabled;
