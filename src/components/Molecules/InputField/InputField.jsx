import React from "react";
import PropTypes from "prop-types";
import "./InputField.css"; 

const InputField = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="input-field">
      <label className="input-label">{label}</label>
      <input
        type="text"
        className="input-box"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: "",
};

export default InputField;