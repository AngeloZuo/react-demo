import React from 'react';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const AzActionGroups = (props) => (
    <div className="">
        {
            props.hasAddBtn &&
            <Button variant="fab" color="primary" mini aria-label="add">
                <AddIcon />
            </Button>
        }
        {
            props.hasEditBtn &&
            <Button variant="fab" color="primary" mini aria-label="edit" disabled={false}>
                <EditIcon />
            </Button>
        }
        {
            props.hasDeleteBtn &&
            <Button variant="fab" color="secondary" mini aria-label="delete" disabled>
                <DeleteIcon />
            </Button>
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