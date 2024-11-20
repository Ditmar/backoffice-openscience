import React from 'react';
import styles from './ArticleInput.module.scss';
import type { IProps } from './types/IProps';
import { Icon } from '../../utils/svg-icons/icons';

function ArticleInput({ label, placeholder, onChange, icon, onIconClick }: IProps) {
  const articleInputId = label
    ? `article-input-${label.replace(/\s+/g, '-').toLowerCase()}`
    : undefined;

  return (
    <div className={styles['article-input__container']}>
      {label && (
        <label htmlFor={articleInputId} className={styles['article-input__label']}>
          {label}
        </label>
      )}
      <div className={styles['article-input__wrapper']}>
        {icon && (
          <button
            type="button"
            onClick={onIconClick}
            className={styles['article-input__icon-button']}
            aria-label="Toggle Dropdown"
          >
            <Icon data-testid="angle-down" src={icon} className={styles['article-input__icon']} />
          </button>
        )}
        <input
          id={articleInputId}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          className={styles['article-input__field']}
        />
      </div>
    </div>
  );
}

export default ArticleInput;
