import React from 'react';
import classNames from 'classnames';
import styles from './TooltipsII.module.scss';
import type { IProps } from './types/IProps';

function Tooltip({ children, variant = 'bottom', text = 'default', size = 'medium' }: IProps) {
  const tooltipClass = classNames(styles.tooltip, {
    [styles[`tooltip-${variant}`]]: variant,
    [styles[`tooltip-${size}`]]: size,
  });

  return (
    <div className={tooltipClass}>
      {React.isValidElement(children)
        ? React.cloneElement(children, {
            className: classNames(
              (children.props as { className?: string }).className,
              styles['tooltip-icon'],
            ),
          })
        : children}
      <span className={styles['tooltip-content']}>{text}</span>
    </div>
  );
}

export default Tooltip;
