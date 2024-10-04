import React from 'react';
import classNames from 'classnames';
import styles from './link.module.scss';
import type { LinksProps } from './types/types';

function Links(props: LinksProps) {
  const { href, variant, children } = props;

  const linksClass = classNames(styles.link, {
    [styles.Enabled]: variant === 'Enabled',
    [styles.Hover]: variant === 'Hover',
    [styles.Focus]: variant === 'Focus',
    [styles.Active]: variant === 'Active',
    [styles.Disabled]: variant === 'Disabled',
    [styles.Visited]: variant === 'Visited',
    [styles.Small]: variant === 'Small',
    [styles.Normal]: variant === 'Normal',
    [styles.Big]: variant === 'Big',
  });

  return (
    <a href={href} className={linksClass}>
      {children} {/* Usa children aquí para mostrar el texto */}
    </a>
  );
}

export default Links;
