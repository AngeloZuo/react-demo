import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import CustomerList from "../../components/customers/CustomerList";
import FetchCustomer from "./FetchCustomer";

const CustomerSearch = props => {
  const {
    conditions,
    onLinkClick,
    onChbClick,
    tableConfig,
    afterSearch,
    isSearching
  } = props;

  const foundItem = tableConfig.find(
    element => element.dataIndex === "customerName"
  );
  foundItem
    ? (foundItem["render"] = (displayContent, record) =>
        onLinkClick(displayContent, record))
    : null;

  return (
    <FetchCustomer
      conditions={conditions}
      afterSearch={afterSearch}
      isSearching={isSearching}
    >
      {({ loading, customers, error }) => {
        if (error) {
          return <div>Error</div>;
        }

        return (
          <CustomerList
            lists={customers.searchList}
            tableConfig={tableConfig}
            checkboxSelection={onChbClick}
            loading={loading}
            pagination={true}
          />
        );
      }}
    </FetchCustomer>
  );
};

CustomerSearch.propTypes = {
  conditions: PropTypes.object.isRequired,
  tableConfig: PropTypes.array.isRequired,
  onLinkClick: PropTypes.func.isRequired,
  onChbClick: PropTypes.object.isRequired
};

CustomerSearch.defaultProps = {
  conditions: {},
  tableConfig: [],
  onLinkClick: () => {},
  onChbClick: {}
};

export default CustomerSearch;
