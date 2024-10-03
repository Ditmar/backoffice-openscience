<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1e093ea (feature/SEM-023)
import classNames from 'classnames';
import type { IProps } from './types/IProps';
import styles from './styles.module.scss';

<<<<<<< HEAD
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
=======
import type { IProps } from "./types/IProps"
import styles from "./styles.module.scss"
import classNames from "classnames";
export function TabLabel(props: IProps) {
    const { text, variant, isEnable, isSelect } = props;
    const setActive = isSelect || false;
    const tabLabelClass = classNames(styles["tabLabel"], {
        [styles['small']]: variant === 'small',
        [styles['medium']]: variant === 'medium',
        [styles['large']]: variant === 'large',
        [styles['disabled']]: !isEnable,
        [styles['active']]: isEnable,
        [styles['selected']]: setActive
    });
    return (
        <div className={tabLabelClass}>
            {text}
        </div >
    )
}
>>>>>>> 9f9d328 (feature/SEM-023)
=======
export function TabLabel(props: IProps) {
  const { text, variant, isEnable, isSelect } = props;
  const setActive = isSelect ?? false;
  const tabLabelClass = classNames(styles.tabLabel, {
    [styles.small]: variant === 'small',
    [styles.medium]: variant === 'medium',
    [styles.large]: variant === 'large',
    [styles.disabled]: !isEnable,
    [styles.active]: isEnable,
    [styles.selected]: setActive,
  });
  return <div className={tabLabelClass}>{text}</div>;
}
>>>>>>> 1e093ea (feature/SEM-023)
