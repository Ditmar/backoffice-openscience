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