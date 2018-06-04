import React from 'react';
import PropTypes from "prop-types";
import Button from 'antd/lib/button';

const AzActionGroups = (props) => (
    <div className="">
        {
            props.hasAddBtn &&
            <Button type="primary" icon="plus">Add</Button>
        }
        {
            props.hasEditBtn &&
            <Button type="primary" icon="edit">Edit</Button>
        }
        {
            props.hasDeleteBtn &&
            <Button type="danger" icon="delete">Delete</Button>
        }
    </div>
)

AzActionGroups.propTypes = {
    hasAddBtn: PropTypes.bool,
    hasEditBtn: PropTypes.bool,
    hasDeleteBtn: PropTypes.bool
}

AzActionGroups.defaultProps = {
    hasAddBtn: false,
    hasEditBtn: false,
    hasDeleteBtn: false
}

export default AzActionGroups;