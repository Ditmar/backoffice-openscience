import styles from './TooltipsII.module.scss';
import type { IProps } from './types/IProps';

function Tooltip(props: IProps) {
  const { children, position = 'bottom', text = 'default', size = 'medium' } = props;
  return (
    <div
      className={`${styles.tooltip} ${styles[`tooltip-${position}`]} ${styles[`tooltip-${size}`]} `}
    >
      {children}
      <span className={styles['tooltip-content']}>{text}</span>
    </div>
  );
}

export default Tooltip;
