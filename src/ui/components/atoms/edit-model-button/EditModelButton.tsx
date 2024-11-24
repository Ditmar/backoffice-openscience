import classNames from 'classnames';
import type { IEditModelButtonProps } from './types/IEditModelButtonProps';
import styles from './EditModelButton.module.scss';
import { Icon } from '../../utils/svg-icons/icons';

function EditModelButton({ icon, text, onClick, variant, size }: IEditModelButtonProps) {
  const buttonClass = classNames(styles['edit-model-button'], {
    [styles[`edit-model-button--${variant}`]]: variant,
    [styles[`edit-model-button--${size}`]]: size,
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {icon && <Icon src={icon} className={styles['edit-model-button__icon']} />}
      <span className={styles['edit-model-button__text']}>{text}</span>
    </button>
  );
}

export default EditModelButton;
