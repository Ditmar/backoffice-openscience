import styles from './Page-Label.module.scss';
import type { PageIndicatorProps } from './types/Iprops';

function PageIndicator({ currentPage, totalPages }: PageIndicatorProps) {
  return (
    <div className={styles.indicator}>
      Page {currentPage} of {totalPages}
    </div>
  );
}

export default PageIndicator;
