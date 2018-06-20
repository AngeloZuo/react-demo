import React from "react";
import PropTypes from "prop-types";
import { searchCustomers } from "../../actions/customer/customerSearchActions";

class FetchCustomerList extends React.Component {
    state = {
        loading: true,
        customers: [],
        error: null
    };

    getCustomers(conditions) {
        searchCustomers(conditions).then(data => {
            this.setState({ customers: data, loading: false });
        });
    }

    componentDidMount() {
        this.getCustomers(this.props.conditions);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.conditions !== this.props.conditions) {
            this.setState({ loading: true });
            this.getCustomers(nextProps.conditions);
        }
    }

    render() {
        const { loading, customers, error } = this.state;
        return this.props.children({ loading, customers, error });
    }
}

FetchCustomerList.propTypes = {
    conditions: PropTypes.object.isRequired
};

FetchCustomerList.defaultProps = {
    conditions: {}
};

export default FetchCustomerList;
