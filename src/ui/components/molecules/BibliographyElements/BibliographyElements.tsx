import React from 'react';
import ConfigureViewButton from '../../atoms/configure-view-button/ConfigureViewButton';
import styles from './BibliographyElements.module.scss';
import filter from '../../../../assets/icons/filter.svg?raw';
import settings from '../../../../assets/icons/settings.svg?raw';
import type { IProps } from './types/IProps';

function BibliographyElements({ setFilter, filterFound }: IProps) {
  return (
    <div className={styles.biography}>
      <h1 className={styles.title}>Bibliographies</h1>
      <p className={styles.found}>{filterFound} entries found</p>
      <div className={styles.config}>
        <ConfigureViewButton
          icon={filter}
          text="Filters"
          size="small"
          onClick={setFilter}
          variant="secondary"
        />

        <ConfigureViewButton icon={settings} size="small" onClick={() => {}} variant="secondary" />
      </div>
    </div>
  );
}

export default BibliographyElements;
