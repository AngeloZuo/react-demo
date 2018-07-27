import React from "react";
import PropTypes from "prop-types";

const AzInputBox = props => (
  <input
    className="custom_inputBox"
    type="text"
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
);

AzInputBox.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

AzInputBox.defaultProps = {
  placeholder: ""
};

export default AzInputBox;
