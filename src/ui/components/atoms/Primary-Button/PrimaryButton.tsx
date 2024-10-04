import styles from './PrimaryButton.module.scss';
import type { IProps } from './types/IProps';
import Add from '../../../../assets/icons/add.svg?raw';

function PrimaryButton(props: IProps) {
  const { children, variant, onClick, icon } = props;
  const selectedIcon = icon ?? (children === 'Primary button' ? Add : Add);
  return (
      <button className={`${styles['primary-button']} ${styles[`primary-button--${variant}`]}`} onClick={onClick}>
        <span className={styles['primary-button__text']}>{children}</span>
        {selectedIcon && <img src={selectedIcon} alt="" />}
      </button>
  );
}

export default PrimaryButton;
