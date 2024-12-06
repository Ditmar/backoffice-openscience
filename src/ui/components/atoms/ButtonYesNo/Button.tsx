import classNames from 'classnames';
import type { IProps } from './types/IProps';
import styles from './styles.module.scss';

function Button({ children, variant }: IProps) {
  const buttonClass = classNames(styles['button-label--container'], {
    [styles['button-label--primary']]: variant === 'primary',
    [styles['button-label--secondary']]: variant === 'secondary',
    [styles['button-label--tertiary']]: variant === 'tertiary',
    [styles['button-label--quaternary']]: variant === 'quaternary',
    [styles['button-label--quinary']]: variant === 'quinary',
  });

  return (
    <button className={buttonClass} data-testid="button-styles">
      <span>{children}</span>
    </button>
  );
}

export default Button;
