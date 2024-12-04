import styles from './ButtonNewEntryBibliographies.module.scss';
import InputField from '../../atoms/InputField/InputField';
import AuthorManagement from '../author-management/AuthorManagement';
import type { IProps } from './types/IProps';

function ButtonNewEntryBibliographies({ onChange = () => {} }: IProps) {
  const handleEdit = (): void => {
    throw new Error('Function not implemented.');
  };

  const handleConfigure = (): void => {
    throw new Error('Function not implemented.');
  };

  return (
    <form className={styles.bibliography__form}>
      <div className={styles.form__holders}>
        <div className={styles.form__field}>
          <div className={styles.form__label}>publication Year</div>
          <InputField
            placeholder="Enter publication Year"
            onChange={onChange}
            style={{ height: '35px' }}
          />
        </div>

        <div className={styles.form__field}>
          <div className={styles.form__label}>article</div>
          <InputField placeholder="Enter article" onChange={onChange} style={{ height: '35px' }} />
        </div>
      </div>

      <div className={styles.form__author}>
        <AuthorManagement onEdit={handleEdit} onConfigure={handleConfigure} />
      </div>
    </form>
  );
}

export default ButtonNewEntryBibliographies;
