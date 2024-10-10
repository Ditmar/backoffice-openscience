import styles from './Chevron-Button.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../utils/svg-icons/icons';

function ChevronButton(props: IProps) {
  const { icon, onClick } = props;
  return (
    <button className={`${styles['button-chevron']}`} onClick={onClick}>
      {icon && (
        <Icon data-testid="icon-chevron" src={icon} className={`${styles['icon-chevron']}`} />
      )}
    </button>
  );
}

export default ChevronButton;
