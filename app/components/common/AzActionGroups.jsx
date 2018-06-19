import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const AzActionGroups = props => (
    <div className="">
        {props.hasEditBtn && (
            <Button type="primary" icon="edit" onClick={props.onEditClick}>
                Edit
            </Button>
        )}
        {props.hasDeleteBtn && (
            <Button type="danger" icon="delete" onClick={props.onDeleteClick}>
                Delete
            </Button>
        )}
    </div>
);

AzActionGroups.propTypes = {
    hasEditBtn: PropTypes.bool,
    hasDeleteBtn: PropTypes.bool
};

AzActionGroups.defaultProps = {
    hasEditBtn: false,
    hasDeleteBtn: false
};

export default AzActionGroups;
