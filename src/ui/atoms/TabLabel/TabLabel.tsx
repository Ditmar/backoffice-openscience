<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1e093ea (feature/SEM-023)
import classNames from 'classnames';
import type { IProps } from './types/IProps';
import styles from './styles.module.scss';
=======
import classNames from 'classnames';
import styles from './styles.module.scss';
import type { IProps } from './types/IProps';
>>>>>>> c3db84f (feature/SEM-023)

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
=======
>>>>>>> 28f4eb1 (feature/SEM-023)
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
<<<<<<< HEAD
}
>>>>>>> 9f9d328 (feature/SEM-023)
=======
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
>>>>>>> 1e093ea (feature/SEM-023)
=======
}
>>>>>>> 28f4eb1 (feature/SEM-023)
