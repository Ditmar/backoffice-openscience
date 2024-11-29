import React from 'react';
import './FormFields.css';

function FormFields({ placeholder }: { placeholder: string }) {
  return (
    <div className="form-fields">
      {[
        'Full name',
        'InstitutionalAffiliation',
        'ORCID',
        'CopyrightRegistration',
        'Articles',
        'Email',
      ].map((label) => (
        <div className="form-group" key={label}>
          <label htmlFor={label.toLowerCase().replace(' ', '-')} className="form-label">
            {label}
          </label>
          <input
            type="text"
            id={label.toLowerCase().replace(' ', '-')}
            placeholder={placeholder}
            className="form-input"
          />
        </div>
      ))}
    </div>
  );
}

export default FormFields;
