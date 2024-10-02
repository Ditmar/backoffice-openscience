import styles from './styles.module.scss';
import type { IProps } from './types/IProps';

function Tag({ children, variant = 'primary', onClick }: IProps) {
  const variantClass = styles[`tag--${variant}`];
  return (
    <div className={`${styles.tag} ${variantClass}`}>
      <span className={styles['tag-label']}>{children}</span>
      <button className={`${styles['tag-button']} ${variantClass}`} onClick={onClick}>
        x
      </button>
    </div>
  );
}

export default Tag;
