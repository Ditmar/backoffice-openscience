import styles from './UserForm.module.scss';
import Placeholder from '../../atoms/placeholder/Placeholder';
import ButtonSubmit from '../../atoms/button_submit/ButtonSubmit';
import type { IProps } from './types/IProps';

function UserForm({ onChange = () => {}, onSearchClick }: IProps) {
  return (
    <form className={styles.user__form}>
      <div className={styles.form__field}>
        <span className={styles.form__label}>Username</span>
        <Placeholder placeholder="Username" onChange={onChange} />
      </div>

      <div className={styles.form__field}>
        <span className={styles.form__label}>Email</span>
        <Placeholder placeholder="Email" onChange={onChange} />
      </div>

      <div className={styles.form__field}>
        <span className={styles.form__label}>Password</span>
        <Placeholder placeholder="Password" onChange={onChange} />
      </div>

      <div className={styles.form__field}>
        <span className={styles.form__label}>Role</span>
        <Placeholder placeholder="Role" onChange={onChange} />
      </div>

      <div className={styles.form__submit}>
        <ButtonSubmit onClick={onSearchClick}>Submit</ButtonSubmit>
      </div>
    </form>
  );
}

export default UserForm;
