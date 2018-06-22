import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import CustomerList from "../../components/customers/CustomerList";
import FetchCustomer from "./FetchCustomer";

const CustomerSearch = props => {
    const { conditions, onLinkClick, onChbClick, tableConfig } = props;

    _.forEach(tableConfig, (tableCell, tableCellKey) => {
        if (tableCell.dataIndex === "customerName") {
            tableCell["render"] = displayContent => onLinkClick(displayContent);
        }
    });

    return (
        <FetchCustomer conditions={conditions}>
            {({ loading, customers, error }) => {
                if (loading) {
                    return <div>Loading</div>;
                }
                if (error) {
                    return <div>Error</div>;
                }

                return (
                    <CustomerList
                        lists={customers.searchList}
                        tableConfig={tableConfig}
                        checkboxSelection={onChbClick}
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
