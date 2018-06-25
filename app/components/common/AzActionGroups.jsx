import React from "react";
import PropTypes from "prop-types";

const AzActionGroups = props => {
    return (
        <div className="">
            {props.children}
        </div>
    );
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
