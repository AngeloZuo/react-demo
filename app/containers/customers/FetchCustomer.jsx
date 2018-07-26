import React from "react";
import PropTypes from "prop-types";
import { searchCustomers } from "../../actions/customer/customerSearchActions";

class FetchCustomer extends React.Component {
  state = {
    loading: true,
    customers: [],
    error: null
  };

  async getCustomers(conditions) {
    const data = await searchCustomers(conditions);
    this.setState({ customers: data, loading: false });
    this.props.afterSearch();
  }

  componentDidMount() {
    this.getCustomers(this.props.conditions);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isSearching) {
      this.setState({ loading: true });
      this.getCustomers(nextProps.conditions);
    }
  }

  render() {
    const { loading, customers, error } = this.state;
    return this.props.children({ loading, customers, error });
  }
}

FetchCustomer.propTypes = {
  conditions: PropTypes.object.isRequired,
  afterSearch: PropTypes.func,
  isSearching: PropTypes.bool
};

FetchCustomer.defaultProps = {
  conditions: {},
  afterSearch: () => {},
  isSearching: false
};

export default FetchCustomer;
