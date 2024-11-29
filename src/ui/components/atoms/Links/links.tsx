import React from 'react';
import classNames from 'classnames';
import type { LinksIprops } from './types/IProps';
import styles from './links.module.scss';

function Links({
  size = 'medium',
  disabled = false,
  isFocused = false,
  onClick,
  href = '#',
}: LinksIprops) {
  const LinksClass = classNames(styles.link, {
    [styles['link--small']]: size === 'small',
    [styles['link--medium']]: size === 'medium',
    [styles['link--large']]: size === 'large',
    [styles['link--disabled']]: disabled,
    [styles['link--focus']]: isFocused,
  });
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };
  return (
    <a className={LinksClass} onClick={handleClick} href={href}>
      Links action
    </a>
  );
}

export default Links;
