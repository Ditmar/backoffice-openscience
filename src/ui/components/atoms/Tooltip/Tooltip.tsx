import classNames from 'classnames';
import { SlInfo } from 'react-icons/sl';
import styles from './Tooltip.module.scss';
import type { ToolTipsProps } from './types/IProps';

export function Tooltip(props: ToolTipsProps) {
  const { text, variant = 'medium', toolTipText } = props;

  const toolTipsClass = classNames(styles.tooltip, {
    [styles.small]: variant === 'small',
    [styles.medium]: variant === 'medium',
    [styles.large]: variant === 'large',
  });

  return (
    <div className={styles.tooltip}>
      <span className={styles.text}>{text}</span>

      <span className={styles.container}>
        <SlInfo className={styles.icon} data-testid="tooltip-icon" />

        <span className={`${toolTipsClass} ${styles.tips}`}>{toolTipText}</span>
      </span>
    </div>
  );
}

export default Tooltip;
