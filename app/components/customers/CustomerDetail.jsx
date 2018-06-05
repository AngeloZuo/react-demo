import React from "react";
import PropTypes from "prop-types";
import Input from 'antd/lib/input';
import _ from "lodash";

export default class CustomerDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let customerDetailData = this.props.customerDetailData;

        return (
            <div>
                {
                    customerDetailData.map((customerDetail) => {
                        let elements = [];
                        
                        _.forEach(customerDetail, (customerValue, customerKey) =>
                            elements.push(<div key={customerKey + "_" + customerValue} style={{ marginBottom: 16 }}>
                                <Input disabled addonBefore={customerKey} defaultValue={customerValue} />
                            </div>)
                        )
                        return elements;
                    })
                }
            </div>
        )
    }
}

CustomerDetail.propTypes = {
    customerDetailData: PropTypes.array.isRequired,
    onChangeDialogStatus: PropTypes.func.isRequired
}

CustomerDetail.defaultProps = {
    customerDetailData: [],
    onChangeDialogStatus: function () { }
}