import React from 'react';
import styles from './FormFields.module.scss';

export interface FormFieldsProps {
  placeholder: string;
}

function FormFields({ placeholder }: FormFieldsProps) {
  return (
    <div className={styles['form-fields']}>
      {[
        'Full name',
        'InstitutionalAffiliation',
        'ORCID',
        'CopyrightRegistration',
        'Articles',
        'Email',
      ].map((label) => (
        <div className={styles['form-fields__group']} key={label}>
          <label
            htmlFor={label.toLowerCase().replace(' ', '-')}
            className={styles['form-fields__label']}
          >
            {label}
          </label>
          <input
            type="text"
            id={label.toLowerCase().replace(' ', '-')}
            placeholder={placeholder}
            className={styles['form-fields__input']}
          />
        </div>
      ))}
    </div>
  );
}

export default FormFields;
