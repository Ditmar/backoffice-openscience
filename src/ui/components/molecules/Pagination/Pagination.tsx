import styles from './Pagination.module.scss';
import LabelPage from '../../atoms/Label-Page/Page-Label';
import ChevronButton from '../../atoms/ButtonChevron/Chevron-Button';
import type { PaginationProps } from './types/IProps';

import left from '../../../../assets/icons/angle-left.svg?raw';
import right from '../../../../assets/icons/angle-right.svg?raw';

function Pagination({ currentPage, totalPages, onClick }: PaginationProps) {
  return (
    <div className={`${styles.pagination}`}>
      <ChevronButton icon={left} onClick={onClick} />
      <LabelPage currentPage={currentPage} totalPages={totalPages} />
      <ChevronButton icon={right} onClick={onClick} />
    </div>
  );
}

export default Pagination;
