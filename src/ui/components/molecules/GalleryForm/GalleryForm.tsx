import React from 'react';
import styles from './GalleryForm.module.scss';
import TextInput from '../../atoms/TextInput/TextInput';
import type { IProps } from './Types/IProps';

function GalleryForm({ onInputChange = () => {}, size = 'medium', ...props }: IProps) {
  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(field, event.target.value);
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <form className={styles.form} {...props}>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Title</div>
        <TextInput
          size={size}
          placeholder="Enter title"
          onChange={handleChange('title')}
          data-input-name="title"
        />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Source</div>
        <TextInput
          size={size}
          placeholder="Enter source"
          onChange={handleChange('source')}
          data-input-name="source"
        />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Description</div>
        <TextInput
          size={size}
          placeholder="Enter description"
          onChange={handleChange('description')}
          data-input-name="description"
        />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Article</div>
        <TextInput
          size={size}
          placeholder="Enter article"
          onChange={handleChange('article')}
          data-input-name="article"
        />
      </div>
      <div className={styles.form__field}>
        <div className={styles.form__label}>Legend</div>
        <TextInput
          size={size}
          placeholder="Enter legend"
          onChange={handleChange('legend')}
          data-input-name="legend"
        />
      </div>
    </form>
  );
}

export default GalleryForm;
