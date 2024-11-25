import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const InputField = ({ label, placeholder, icon, error, onChange, value }) => {
  return (
    <div className={`input-field ${error ? 'input-field--error' : ''}`}>
      <label className="input-field__label">{label}</label>
      <div className="input-field__wrapper">
        {icon && <span className="input-field__icon">{icon}</span>}
        <input
          className="input-field__input"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <span className="input-field__error">{error}</span>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.node,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

InputField.defaultProps = {
  placeholder: 'Placeholder text',
  icon: null,
  error: null,
};

export default InputField;
