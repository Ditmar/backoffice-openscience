import AuthorManagement from '../../molecules/author-management/AuthorManagement';
import UploadImage from '../../atoms/UploadImage/UploadImage';
import styles from './ElementsForm.module.scss';
import type { IProps } from './types/IProps';

function ElementsForm({ onConfigure, onEdit }: IProps) {
  return (
    <section className={styles.container}>
      <div className={styles.columnupload}>
        <p className={styles.titleurl}>url</p>
        <div className={styles.uploadcontainer}>
          <UploadImage />
        </div>
      </div>
      <div className={styles.containerbutton}>
        <div>
          <AuthorManagement onConfigure={onConfigure} onEdit={onEdit} />
        </div>
      </div>
    </section>
  );
}

export default ElementsForm;
