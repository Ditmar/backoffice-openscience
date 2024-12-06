import ChevronButton from '../../atoms/ButtonChevron/Chevron-Button';
import Checklist from '../../atoms/Checklist/Checklist';
import styles from './style.module.scss';
import left from '../../../../assets/icons/angle-left.svg?raw';
import right from '../../../../assets/icons/angle-right.svg?raw';
import type { IProps } from './types/IProps';

function BibliographyActions({ items, onCheck, onNext, onPrevious, page }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <Checklist
          className={styles.setbg}
          items={items}
          onCheck={onCheck}
          SelectCategory={() => {}}
        />
        <p>Entries per page</p>
      </div>
      <div className={styles.container}>
        <ChevronButton onClick={onPrevious} icon={left} variant="Left" />
        <p className={styles.setbg}>{page}</p>
        <ChevronButton onClick={onNext} icon={right} variant="Right" />
      </div>
    </div>
  );
}

export default BibliographyActions;
