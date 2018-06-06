import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import _ from "lodash";

export default class CustomerDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customerDetailData: this.props.customerDetailData
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.customerDetailData !== this.props.customerDetailData) {
            this.setState({
                customerDetailData: this.props.customerDetailData
            });
        }
    }

    render() {
        // let customerDetailData = this.props.customerDetailData;
        let disableInput = false;

        switch (this.props.customerDetailFlag) {
            case "CUSTOMER_DETAIL_SEARCH":
                disableInput = true;
                break;
            case "ADD_CUSTOMER":
                disableInput = false;
                break;
            default:
                disableInput = false;
        }

        return (
            <Formik
                onSubmit={this.props.customerDetailAction}
                render={props =>
                    <Form>
                        {
                            this.state.customerDetailData.map((customerDetail) => {
                                let elements = [];

                                _.forEach(customerDetail, (customerValue, customerKey) =>
                                    elements.push(
                                        <Field
                                            key={customerKey + "_" + customerValue}
                                            type="text"
                                            name={customerKey}
                                            component={() => <div style={{ marginBottom: 16 }}>
                                                <Input disabled={disableInput} addonBefore={customerKey} defaultValue={customerValue} />
                                            </div>}
                                            onChange={props.handleChange}
                                        />
                                    )
                                )
                                return elements;
                            })
                        }
                        {!disableInput && <Button type="primary" shape="circle" icon="check" onClick={(e) => { props.handleSubmit(e) }} />}
                    </Form>
                }
            />
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