import React from "react";
import PropTypes from "prop-types";

const AzInputBox = ({ value, placeholder, onChange }) => (
  <input
    className="custom_inputBox"
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

AzInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AzInputBox;
