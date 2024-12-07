import classNames from 'classnames';
import styles from './TextInputErrorDisabled.module.scss';
import type { TextInputErrorDisabledProps } from './types/IProps';
<<<<<<< HEAD
=======
import { Icon } from '../../utils/svg-icons/icons';
import circleDelete from '../../../../assets/icons/circle-delete.svg?raw';
>>>>>>> 5c8f08845e09e24ebdd51ef38f1dcb3ffe3c2c2b

function TextInputErrorDisabled({
  variant = 'medium',
  errorMessage,
  isDisabled,
  placeholder,
  value,
<<<<<<< HEAD
  onChange,
}: TextInputErrorDisabledProps) {
  return (
    <div className={styles.inputwrapper}>
      <div className={styles.inputcontainer}>
=======
}: TextInputErrorDisabledProps) {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
>>>>>>> 5c8f08845e09e24ebdd51ef38f1dcb3ffe3c2c2b
        <input
          className={classNames(styles.input, {
            [styles.error]: errorMessage,
            [styles.disabled]: isDisabled,
            [styles[variant]]: variant,
          })}
<<<<<<< HEAD
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
=======
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
        />
        <Icon data-testid="icon-add" src={circleDelete} className={styles.iconstyle} />
      </div>
      {errorMessage && !isDisabled && <p className={styles.errormessage}>{errorMessage}</p>}
>>>>>>> 5c8f08845e09e24ebdd51ef38f1dcb3ffe3c2c2b
    </div>
  );
}

export default TextInputErrorDisabled;
