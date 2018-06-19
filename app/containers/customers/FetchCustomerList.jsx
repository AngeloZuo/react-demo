import React from "react";
import PropTypes from "prop-types";
import { searchCustomers } from "../../actions/customer/customerSearchActions";

class FetchCustomerList extends React.Component {
    state = {
        loading: true,
        customers: [],
        error: null
    };

    getCustomers() {
        searchCustomers(this.props.conditions).then(data => {
            this.setState({ customers: data, loading: false });
        });
    }

    componentDidMount() {
        this.getCustomers();
    }

    componentWillReceiveProps() {
        console.log("+++", this.props.conditions);
        this.getCustomers();
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
