import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './link.module.scss';
import type { IProps } from './types/IProps';

function Links(props: IProps) {
  const { children, variant, onClick } = props;
  const [active, setActive] = useState(false);

  const linkClass = classNames(styles.links, {
    [styles.active]: active,
    [styles.disabled]: variant === 'Disabled',
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (variant === 'Disabled') {
      e.preventDefault();
      return;
    }
    setActive(true);
    onClick?.();

    setTimeout(() => {
      setActive(false);
    }, 200);
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
