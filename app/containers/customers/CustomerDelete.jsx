import React from "react";
import PropTypes from "prop-types";

import AzDeleteModal from "../../components/common/AzDeleteModal";
import { deleteCustomers } from "../../actions/customerSearchActions";

class CustomerDelete extends React.Component {
    state = {
        hasDeleted: false
    };

    onDeleteClick = async () => {
        const customerList = this.props.deleteInfo;
        await deleteCustomers(customerList);
        this.setState({
            hasDeleted: true
        });
        this.props.afterDelete();
    };

    render() {
        const { deleteInfo } = this.props;
        return (
            <AzDeleteModal
                onDeleteClick={this.onDeleteClick}
                deleteInfo={deleteInfo}
                hasDeleted={this.state.hasDeleted}
            />
        );
    }
}

CustomerDelete.propTypes = {
    afterDelete: PropTypes.func.isRequired,
    deleteInfo: PropTypes.array.isRequired
};

CustomerDelete.defaultProps = {
    afterDelete: () => {},
    deleteInfo: []
};

export default CustomerDelete;
