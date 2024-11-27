import styles from './bibliograpyform.module.scss';
import InputField from '../../atoms/InputField/InputField';
import type { IProps } from './types/Iprops';

function BibliographyForm({ onChange = () => {} }: IProps) {
  return (
    <form className={styles.bibliography__form}>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Public Type</div>
        <InputField placeholder="Enter publication type" onChange={onChange} />
      </div>

      <div className={styles.form__field}>
        <div className={styles.form__label}>Author Last Name</div>
        <InputField placeholder="Enter author name" onChange={onChange} />
      </div>

      <div className={styles.form__field}>
        <div className={styles.form__label}>Author Inititals</div>
        <InputField placeholder="Enter Author initials" onChange={onChange} />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Publication Title</div>
        <InputField placeholder="Enter title" onChange={onChange} />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Volume</div>
        <InputField placeholder="Enter volume" onChange={onChange} />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Edition Number</div>
        <InputField placeholder="Enter number" onChange={onChange} />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Pages</div>
        <InputField placeholder="Enter page" onChange={onChange} />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Edition Initilas</div>
        <InputField placeholder="Enter editor initials" onChange={onChange} />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Editor Last Name</div>
        <InputField placeholder="Enter last name editor" onChange={onChange} />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Publication Place</div>
        <InputField placeholder="Enter place" onChange={onChange} />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Editor</div>
        <InputField placeholder="Enter type" onChange={onChange} />
      </div>

      <div className={styles.form__field}>
        <div className={styles.form__label}>Electronic Address</div>
        <InputField placeholder="Enter Address" onChange={onChange} />
      </div>
    </form>
  );
}

export default BibliographyForm;
