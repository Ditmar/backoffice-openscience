import styles from './PrimaryButton.module.scss';
import type { IProps } from './types/IProps';

function PrimaryButton(props: IProps) {
  const { children, variant, onClick } = props;
  return (
    /*<button className={`Primary-button Primary-button--${variant}`} onClick={onClick}>
        <span className="Primary-button__text">{children}</span>
    </button>*/
      <button className={`${styles['Primary-button']} ${styles[`Primary-button--${variant}`]}`} onClick={onClick}>
        <span className={styles['Primary-button__text']}>{children}</span>
      </button>
  );
}

export default PrimaryButton;
