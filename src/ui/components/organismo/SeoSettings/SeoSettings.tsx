import React from 'react';
import UploadImage from '../../atoms/UploadImage/UploadImage';
import AuthorManagement from '../../molecules/author-management/AuthorManagement';
import styles from './SeoSettings.module.scss';
import type { IProps } from './types/IProps';

function SeoSettings({ onConfigure, onEdit }: IProps) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>og_image</p>
      <div className={styles.uploadContainer}>
        <UploadImage />
      </div>
      <div>
        <AuthorManagement onConfigure={onConfigure} onEdit={onEdit} />
      </div>
    </div>
  );
}

export default SeoSettings;
