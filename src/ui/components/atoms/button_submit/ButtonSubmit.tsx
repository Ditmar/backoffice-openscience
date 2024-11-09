import classNames from 'classnames';
import styles from './ButtonSubmit.module.scss';
import type { IProps } from './types/IProps';

function ButtonSubmit({ children, onClick }: IProps) {
  const buttonClass = classNames(styles['button-submit']);

  return (
    <button className={buttonClass} onClick={onClick}>
      <span className={styles['button-variant-danger']}>{children}</span>
    </button>
  );
}

export default ButtonSubmit;
