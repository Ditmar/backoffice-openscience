import classNames from 'classnames';
<<<<<<< HEAD
import type { IProps } from './types/IProps';
import styles from './styles.module.scss';
=======
import styles from './styles.module.scss';
import type { IProps } from './types/IProps';
>>>>>>> 7376c7597270cd71bec03e312ef3343c5d273979

export function TabLabel(props: IProps) {
  const { text, variant, isEnable, isSelect } = props;
  const setActive = isSelect ?? false;
  const tablabelClass = classNames(styles.tablabel, {
    [styles.small]: variant === 'small',
    [styles.medium]: variant === 'medium',
    [styles.large]: variant === 'large',
    [styles.disabled]: !isEnable,
    [styles.active]: isEnable,
    [styles.selected]: setActive,
  });
  return <div className={tablabelClass}>{text}</div>;
}
