import React from 'react';
import classNames from 'classnames';
import styles from './VolumeManagement.module.scss';
import AuthorManagement from '../../molecules/author-management/AuthorManagement';
import PlaceHolder from '../../atoms/UploadImage/UploadImage';
import type { IVolumeManagementProps } from './types/IVolumeManagementProps'; // Importar la interfaz

function VolumeManagement({
  onEdit,
  onConfigure,
  variant = 'primary',
  size = 'medium',
}: IVolumeManagementProps) {
  return (
    <div
      className={classNames(
        styles['volume-management'],
        styles[`volume-management--${variant}`],
        styles[`volume-management--${size}`],
      )}
      role="region"
      aria-label="Volume Management"
    >
      <div className={styles['volume-management__top-container']}>
        <div className={styles['volume-management__portrait-text']}>portrait</div>

        <div className={classNames(styles['volume-management__placeholder-container'])}>
          <PlaceHolder />
        </div>
      </div>

      <div className={styles['volume-management__author-management-container']}>
        <AuthorManagement onEdit={onEdit} onConfigure={onConfigure} variant={variant} size={size} />
      </div>
    </div>
  );
}

export default VolumeManagement;
