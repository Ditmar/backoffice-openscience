import React from 'react';
import classNames from 'classnames';
import styles from './TableV2.module.scss';
import ConfigureButton from '../../atoms/configure-view-button/ConfigureViewButton';
import Header from '../../atoms/header-draft/HeaderDraft';
import type { ITableV2Props } from './types/ITableV2Props';

function TableV2({ onConfigure, variant = 'primary', size = 'medium' }: ITableV2Props) {
  return (
    <div className={classNames(styles['table-v2'], styles[size])} role="region">
      <div className={classNames(styles['header-container'], styles[size])}>
        <Header variant={variant} size={size} text="Editing draft version" icon="period" />
      </div>

      <div className={styles['info-actions-container']}>
        <div className={styles['info-section']}>
          <p className={styles['info-title']}>INFORMATION</p>
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

        <div className={styles['actions-container']}>
          <ConfigureButton
            onClick={onConfigure}
            variant={variant}
            size={size}
            text="Configure the view"
            isBurger
          />
        </div>
      </div>
    </div>
  );
}

export default TableV2;
