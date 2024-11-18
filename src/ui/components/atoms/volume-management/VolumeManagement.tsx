import classNames from 'classnames';
import styles from './VolumeManagement.module.scss';
import type { IVolumeManagementProps } from './types/IVolumeManagementProps';
import { Icon } from '../../utils/svg-icons/icons';
import image from '../../../../assets/icons/image.svg?raw';
import pencil from '../../../../assets/icons/pencil.svg?raw';
import rectangle from '../../../../assets/icons/rectangle.svg?raw';

const ICONS = { image, pencil, rectangle };

function ActionButton({
  icon,
  text,
  onClick,
  variant,
  size,
  isBurger = false,
}: {
  icon?: string;
  text: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  isBurger?: boolean;
}) {
  return (
    <button
      className={classNames(styles['action-button'], styles[variant], styles[size])}
      onClick={onClick}
    >
      {isBurger ? (
        <div className={styles['burger-menu-container']} data-testid="burger-menu">
          <div className={styles['burger-icon1']} />
          <div className={styles['burger-icon2']} />
          <div className={styles['burger-icon3']} />
        </div>
      ) : (
        icon && <Icon src={icon} className={styles['action-icon']} />
      )}
      {text}
    </button>
  );
}

function VolumeManagement({
  onEdit,
  onConfigure,
  variant = 'primary',
  size = 'medium',
}: IVolumeManagementProps) {
  return (
    <div className={classNames(styles['volume-management'], styles[size])} role="region">
      <div className={styles['image-container']}>
        <p>Portrait</p>
        <div className={styles['image-placeholder']}>
          <Icon src={ICONS.image} className={styles['image-icon']} />
          <span>Click to add an asset or drag and drop one in this area</span>
        </div>
      </div>

      <button
        className={classNames(styles['draft-editing'], styles[variant], styles[size])}
        onClick={onEdit}
      >
        <span>• Editing draft version</span>
      </button>

      <div className={styles['info-actions-container']}>
        <div className={styles['info-section']}>
          <p>INFORMATION</p>
          <div className={styles['info-row']}>
            <p>Created</p>
            <p>now</p>
          </div>
          <div className={styles['info-row']}>
            <p>By</p>
            <p />
          </div>
          <div className={styles['info-row']}>
            <p>Last updated</p>
            <p>now</p>
          </div>
          <div className={styles['info-row']}>
            <p>By</p>
            <p />
          </div>
        </div>

        <div className={styles.actions}>
          <ActionButton
            icon={ICONS.pencil}
            text="Edit the model"
            onClick={onEdit}
            variant={variant}
            size={size}
          />
          <ActionButton
            isBurger
            text="Configure the view"
            onClick={onConfigure}
            variant={variant}
            size={size}
          />
        </div>
      </div>
    </div>
  );
}

ActionButton.defaultProps = {
  icon: undefined,
  isBurger: false,
};

export default VolumeManagement;
