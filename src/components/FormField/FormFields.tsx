import React from 'react';
import './FormFields.css';

const FormFields: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <div className="form-fields">
      {[
      'Full name', 
      'InstitutionalAffiliation', 
      'ORCID', 
      'CopyrightRegistration', 
      'Articles', 
      'Email', 
      'articles',
      ].map((label, index) => (
        <div className="form-group" key={index}>
          <label htmlFor={label.toLowerCase().replace(' ', '-')} className="form-label">
            {label}
          </label>
          <input
            type="text"
            id={label.toLowerCase().replace(' ', '-')}
            placeholder="Placeholder text"
            className="form-input"
          />
        </div>
      ))}
    </div>
  );
};

export default FormFields;
