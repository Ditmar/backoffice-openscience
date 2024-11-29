import React from 'react';
import classNames from 'classnames';
import styles from './AuthorManagement.module.scss';
import EditModelButton from '../../atoms/edit-model-button/EditModelButton';
import ConfigureButton from '../../atoms/configure-view-button/ConfigureViewButton';
import Header from '../../atoms/header-draft/HeaderDraft';
import type { IAuthorManagementProps } from './types/IAuthorManagementProps';

function AuthorManagement({
  onEdit,
  onConfigure,
  variant = 'primary',
  size = 'medium',
}: IAuthorManagementProps) {
  return (
    <div className={classNames(styles['author-management'], styles[size])} role="region">
      {/* Header con estilos adaptativos */}
      <div className={classNames(styles['header-container'], styles[size])}>
        <Header variant={variant} size={size} text="Editing draft version" icon="period" />
      </div>

      {/* Información y acciones */}
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

        {/* Botones de acciones */}
        <div className={styles['actions-container']}>
          <EditModelButton
            onClick={onEdit}
            variant={variant}
            size={size}
            text="Edit the model"
            icon="pencil"
          />
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

export default AuthorManagement;
