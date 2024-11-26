import InputField from '../../atoms/InputField/InputField';
import type { IFormProps } from './types/Iprops';
import styles from './bibliograpyform.module.scss';

function Form({ fields }: IFormProps) {
  return (
    <form className={styles.form__field}>
      {fields.map((field) => (
        <div key={field.id} className={styles.form__group}>
          <label htmlFor={field.id} className={styles.form__label}>
            {field.name}
          </label>
          <InputField
            placeholder={field.placeholder}
            onChange={(event) => {
              field.onChange(event);
            }}
          />
        </div>
      ))}
    </form>
  );
}

export default Form;
