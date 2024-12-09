import React from 'react';
import classNames from 'classnames';
import styles from './CreateAnEntry.module.scss';
import type { ICreateAnEntryProps } from './types/IProps';

function CreateAnEntry({
  title = 'Create an entry',
  apiId = 'API ID:author',
  variant = 'default',
  size = 'medium',
}: ICreateAnEntryProps) {
  const entryClass = classNames(styles['create-an-entry'], {
    [styles[`create-an-entry--variant-${variant}`]]: variant,
    [styles[`create-an-entry--size-${size}`]]: size,
  });

  return (
    <div className={entryClass}>
      <h1 className={styles['create-an-entry__title']}>{title}</h1>
      <p className={styles['create-an-entry__api-id']}>{apiId}</p>
    </div>
  );
}

export default CreateAnEntry;
