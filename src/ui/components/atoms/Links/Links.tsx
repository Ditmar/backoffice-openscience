import React from 'react';
import classNames from 'classnames';
import styles from './link.module.scss';
import type { IProps } from './types/types';

function Links(props: IProps) {
  const { children, variant, onClick } = props;
  const linkClass = classNames(styles.links, {
    [styles.small]: variant === 'Small',
    [styles.medium]: variant === 'Medium',
    [styles.big]: variant === 'Big',
    [styles.active]: variant === 'Active',
    [styles.disabled]: variant === 'Disabled',
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (variant === 'Disabled') {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <a
      className={linkClass}
      href={variant === 'Disabled' ? undefined : 'url-a-navegar'}
      onClick={handleClick}
      tabIndex={variant === 'Disabled' ? -1 : 0}
      aria-disabled={variant === 'Disabled'}
    >
      <span className={styles.links__text}>{children}</span>
    </a>
  );
}

export default Links;
