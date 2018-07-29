import React from "react";
import PropTypes from "prop-types";

const AzButton = ({ btnValue, onClick }) => (
  <input
    className="custom_button"
    type="button"
    value={btnValue}
    onClick={onClick}
  />
);

AzButton.propTypes = {
  btnValue: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired
};

export default AzButton;
