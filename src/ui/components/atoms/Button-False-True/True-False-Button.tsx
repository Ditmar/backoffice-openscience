import classNames from 'classnames';
import styles from './True-False-Button.module.scss';
import type { IProps } from './types/IProps';

function TrueFalseButton(props: IProps) {
  const { children, variant, onClick } = props;
  const displayClass = classNames(styles.display, {
    [styles.false]: variant === 'False',
    [styles.true]: variant === 'True',
  });
  return (
    <button className={displayClass} onClick={onClick}>
      <span className={styles['add-button__text']}>{children}</span>
    </button>
  );
}

export default TrueFalseButton;
