import React from "react";
import PropTypes from "prop-types";

const AzButton = props => (
  <input
    className="custom_button"
    type="button"
    value={props.btnValue}
    onClick={props.onClick}
  />
);

AzButton.propTypes = {
  btnValue: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired
};

AzButton.defaultProps = {
  btnValue: ""
};

export default AzButton;
