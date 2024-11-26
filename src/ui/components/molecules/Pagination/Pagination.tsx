import { useState } from 'react';
import styles from './Pagination.module.scss';
import LabelPage from '../../atoms/Label-Page/Page-Label';
import ChevronButton from '../../atoms/ButtonChevron/Chevron-Button';
import type { PaginationProps } from './types/IProps';

import left from '../../../../assets/icons/angle-left.svg?raw';
import right from '../../../../assets/icons/angle-right.svg?raw';

function Pagination({ currentPage = 1, totalPages, onClick }: PaginationProps) {
  const [current, setCurrent] = useState(currentPage);

  const handlePrevClick = () => {
    if (current > 1) {
      const updatedPage = current - 1;
      setCurrent(updatedPage);

      // Llamamos a onClick solo si está definido
      if (onClick) {
        onClick(updatedPage);
      }
    }
  };

  const handleNextClick = () => {
    if (current < totalPages) {
      const updatedPage = current + 1;
      setCurrent(updatedPage);

      // Llamamos a onClick solo si está definido
      if (onClick) {
        onClick(updatedPage);
      }
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
