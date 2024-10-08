import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './link.module.scss';
import type { IProps } from './types/IProps';

function Links(props: IProps) {
  const { children, variant, onClick } = props;
  const [active, setActive] = useState(false); // Estado para manejar clic

  const linkClass = classNames(styles.links, {
    [styles.active]: active,
    [styles.disabled]: variant === 'Disabled',
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (variant === 'Disabled') {
      e.preventDefault();
      return;
    }
    setActive(true); // Cambia a activo al hacer clic
    onClick?.();

    // Opcional: Para volver a desactivar el estado después de un tiempo
    setTimeout(() => {
      setActive(false);
    }, 200); // Ajusta el tiempo según tus necesidades
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
