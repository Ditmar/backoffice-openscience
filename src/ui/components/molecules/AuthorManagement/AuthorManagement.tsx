import React from 'react';
import CreateAnEntry from '../../atoms/Create-an-entry/CreateAnEntry';
import { Button } from '../../atoms/ButtonAuthor/ButtonAuthor';
import type { IProps } from './types/IProps';
import styles from './AuthorManagement.module.scss';

export function AuthorManagement({
  title = 'Create an entry',
  apiId = 'API ID:author',
  buttonLabel = 'Save',
  onSave,
  onPublish,
  disabled = false,
}: IProps): JSX.Element {
  return (
    <div className={styles.management}>
      <CreateAnEntry title={title} apiId={apiId} />
      <div className={styles.management__buttons}>
        <Button
          label={buttonLabel}
          onClick={onSave}
          variant="default"
          className="default"
          disabled={disabled}
        />
        <Button
          label="Publish"
          onClick={onPublish}
          variant="primary"
          className="primary"
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default AuthorManagement;
