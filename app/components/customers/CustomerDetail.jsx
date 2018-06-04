import React from "react";
import PropTypes from "prop-types";
import Input from 'antd/lib/input';
import _ from "lodash";

export default class CustomerDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let customerData = this.props.customerDetailData;
        return (
            <div>
                {_.forEach(customerData, (customerValue, customerKey) => 
                    <div style={{ marginBottom: 16 }}>
                        <Input key={customerKey + "_" + customerValue} disabled addonBefore={customerKey} defaultValue={customerValue} />
                    </div>
                )}
            </div>
        )
    }
}

CustomerDetail.propTypes = {
    customerDetailData: PropTypes.object.isRequired
}

CustomerDetail.defaultProps = {
    customerDetailData: {}
}