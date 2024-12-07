import styles from './ButtonNewEntryBibliographies.module.scss';
import AuthorManagement from '../author-management/AuthorManagement';
import type { IProps } from './types/IProps';
import TextInput from '../../atoms/TextInput/TextInput';

function ButtonNewEntryBibliographies({ onChange = () => {}, size = 'medium' }: IProps) {
  let sizeClass;

  if (size === 'small') {
    sizeClass = styles.buttonSmall;
  } else if (size === 'large') {
    sizeClass = styles.buttonLarge;
  } else {
    sizeClass = styles.buttonMedium;
  }

  const handleEdit = (): void => {
    console.log('Edit function called');
  };

  const handleConfigure = (): void => {
    console.log('Configure function called');
  };

  return (
    <form className={`${styles.bibliography__form} ${sizeClass}`}>
      <div className={styles.form__holders}>
        <div className={styles.form__field}>
          <div className={styles.form__label}>Publication Year</div>
          <TextInput placeholder="Enter publication Year" onChange={onChange} />
        </div>

        <div className={styles.form__field}>
          <div className={styles.form__label}>Article</div>
          <TextInput placeholder="Enter article" onChange={onChange} />
        </div>
      </div>

      <div className={styles.form__author}>
        <AuthorManagement
          onEdit={handleEdit}
          onConfigure={handleConfigure}
          variant="primary"
          size={size}
        />
      </div>
    </form>
  );
}

export default ButtonNewEntryBibliographies;
