import styles from './UserForm.module.scss';
import Placeholder from '../../atoms/placeholder/Placeholder';
import type { IProps } from './types/IProps';

function UserForm({ onChange = () => {} }: IProps) {
  return (
    <form className={styles.user__form}>
      <div className={styles.form__field}>
        <span className={styles.form__label}>Username</span>
        <Placeholder placeholder="Enter your username" onChange={onChange} />
      </div>

      <div className={styles.form__field}>
        <span className={styles.form__label}>Email</span>
        <Placeholder placeholder="Enter your email" onChange={onChange} />
      </div>

      <div className={styles.form__field}>
        <span className={styles.form__label}>Password</span>
        <Placeholder placeholder="Enter your password" onChange={onChange} />
      </div>

      <div className={styles.form__field}>
        <span className={styles.form__label}>Role</span>
        <Placeholder placeholder="Enter your role" onChange={onChange} />
      </div>
    </form>
  );
}

export default UserForm;
