import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const AzActionGroups = props => {
    return (
        <div className="">
            {props.hasEditBtn && (
                <Button type="primary" icon="edit" onClick={props.onEditClick}>
                    Edit
                </Button>
            )}
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
