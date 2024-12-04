import styles from './ButtonNewEntryBibliographies.module.scss';
import InputField from '../../atoms/InputField/InputField';
import AuthorManagement from '../../molecules/author-management/AuthorManagement';
import type { IProps } from './types/IProps';

function ButtonNewEntryBibliographies({ onChange = () => {} }: IProps) {
  return (
    <form className={styles.bibliography__form}>
      <div className={styles.form__holders}>
      <div className={styles.form__field}>
        <div className={styles.form__label}>publication Year</div>
        <InputField placeholder="Enter publication year" onChange={onChange} style={{ height: '35px' }}/>
      </div>

      <div className={styles.form__field}>
        <div className={styles.form__label}>article</div>
        <InputField placeholder="Enter article" onChange={onChange} style={{ height: '35px' }} />
      </div>
      </div>


        <div className={styles.form__author} >
       <AuthorManagement onEdit={function (): void {
          throw new Error('Function not implemented.');
        } } onConfigure={function (): void {
          throw new Error('Function not implemented.');
        } }> 
      </AuthorManagement>

      </div>
    </form>
  );
}

export default ButtonNewEntryBibliographies;
