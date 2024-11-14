import { useState } from 'react';
import styles from './Pagination.module.scss';
import LabelPage from '../../atoms/Label-Page/Page-Label';
import ChevronButton from '../../atoms/ButtonChevron/Chevron-Button';
import type { PaginationProps } from './types/IProps';

import left from '../../../../assets/icons/angle-left.svg?raw';
import right from '../../../../assets/icons/angle-right.svg?raw';

function Pagination({ currentPage = 1, totalPages, onClick }: PaginationProps) {
  // Controla el estado de la página actual internamente
  const [current, setCurrent] = useState(currentPage);

  // Manejador para el botón de retroceder página
  const handlePrevClick = () => {
    if (current > 1) {
      setCurrent(current - 1); // Actualiza la página actual restando 1
      if (onClick) onClick(current - 1); // Llama a onClick con la nueva página
    }
  };

  // Manejador para el botón de avanzar página
  const handleNextClick = () => {
    if (current < totalPages) {
      setCurrent(current + 1); // Actualiza la página actual sumando 1
      if (onClick) onClick(current + 1); // Llama a onClick con la nueva página
    }
  };

  return (
    <div className={`${styles.pagination}`}>
      <ChevronButton icon={left} onClick={handlePrevClick} />
      <LabelPage currentPage={current} totalPages={totalPages} />
      <ChevronButton icon={right} onClick={handleNextClick} />
    </div>
  );
}

export default Pagination;
