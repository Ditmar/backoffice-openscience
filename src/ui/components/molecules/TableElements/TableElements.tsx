import React, { useState } from 'react';
import Tooltip from '../../atoms/Tooltip/Tooltip';
import ButtonYesNo from '../../atoms/ButtonYesNo/Button';
import Toggle from '../../atoms/Toggle/Toggle';
import Checkbox from '../../atoms/checkbox/checkbox';
import styles from './TableElements.module.scss';
import datamock from './mock/datamock.json';
import type { IProps } from './types/IProps';

function TableElements() {
  const [Element] = useState<IProps[]>(datamock.data);

  return (
    <div className={styles['table-container']}>
      <div className={styles['table-content']}>
        {Element.map(({ id, attributes }) => {
          const { content, author, category, date, buttonLabel } = attributes;

          return (
            <div key={id} className={styles['table-row']}>
              <div className={styles['table-cell']}>
                <span>{id}</span>
              </div>
              <div className={styles['table-cell']}>
                <Tooltip
                  text={content}
                  toolTipText={`${content} by ${author}, categories: ${category}`}
                  variant="medium"
                />
              </div>
              <div className={styles['table-cell']}>
                <ButtonYesNo variant="primary" color="primary">
                  {buttonLabel}
                </ButtonYesNo>
              </div>
              <div className={styles['table-cell']}>
                <Toggle
                  label={`Toggle ${id}`}
                  onChange={() => {
                    // Handle toggle change
                  }}
                />
              </div>
              <div className={styles['table-cell']}>
                <span>
                  {new Date(date)
                    .toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })
                    .replace(',', '')}
                </span>
              </div>
              <div className={styles['table-cell']}>
                <Checkbox />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TableElements;
