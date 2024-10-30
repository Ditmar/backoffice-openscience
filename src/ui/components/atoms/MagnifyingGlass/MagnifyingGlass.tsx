import styles from './MagnifyingGlass.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../utils/svg-icons/icons';

function MagnifyingGlass(props: IProps) {
  const { icon, onClick } = props;

  return (
    <button className={`${styles.magnifying__button}`} onClick={onClick} aria-label="Search Icon">
      {icon && (
        <Icon
          data-testid="magnifying-glass-icon"
          src={icon}
          className={`${styles['icon-magnifying-glass']}`}
        />
      )}
    </button>
  );
}

export default MagnifyingGlass;
