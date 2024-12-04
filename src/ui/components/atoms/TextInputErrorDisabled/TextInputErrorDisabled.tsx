import classNames from 'classnames';
import styles from './TextInputErrorDisabled.module.scss';
import type { TextInputErrorDisabledProps } from './types/IProps';
import { Icon } from '../../utils/svg-icons/icons';
import circleDelete from '../../../../assets/icons/circle-delete.svg?raw';

function TextInputErrorDisabled({
  variant = 'medium',
  errorMessage,
  isDisabled,
  placeholder,
  value,
}: TextInputErrorDisabledProps) {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputContainer}>
        <input
          className={classNames(styles.input, {
            [styles.error]: errorMessage,
            [styles.disabled]: isDisabled,
            [styles[variant]]: variant,
          })}
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
        />
        <Icon data-testid="icon-add" src={circleDelete} className={styles.iconstyle} />
      </div>
      {errorMessage && !isDisabled && <p className={styles.errormessage}>{errorMessage}</p>}
    </div>
  );
}

export default TextInputErrorDisabled;
