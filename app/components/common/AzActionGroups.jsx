import React, { Fragment } from "react";
import PropTypes from "prop-types";

const AzActionGroups = props => {
  return <Fragment>{props.children}</Fragment>;
};

AzActionGroups.propTypes = {
  hasEditBtn: PropTypes.bool,
  hasDeleteBtn: PropTypes.bool
};

AzActionGroups.defaultProps = {
  hasEditBtn: false,
  hasDeleteBtn: false
};

export default AzActionGroups;
