import React from 'react';
import styles from './FormFields.module.scss';

function FormFields({ placeholder }: { placeholder: string }) {
  return (
    <div className={styles.ffFields}>
      {[
        'Full name',
        'InstitutionalAffiliation',
        'ORCID',
        'CopyrightRegistration',
        'Articles',
        'Email',
      ].map((label) => (
        <div className={styles.ffGroup} key={label}>
          <label
            htmlFor={label.toLowerCase().replace(' ', '-')}
            className={styles.ffLabel}
          >
            {label}
          </label>
          <input
            type="text"
            id={label.toLowerCase().replace(' ', '-')}
            placeholder={placeholder}
            className={styles.ffInput}
          />
        </div>
      ))}
    </div>
  );
}

export default FormFields;
