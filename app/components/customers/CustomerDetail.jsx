import React from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import _ from "lodash";

import CustomizeUtils from "../../utils/CustomizeUtils";

export default class CustomerDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            customerName: '',
            createdDate: ''
        }
    }

    componentWillMount() {
        console.log("CustomerDetail-2222--", this.props);
        this.setState(this.props[0]);
    }

    render() {
        console.log("CustomerDetail---", this.props);
        const formControlUuid = CustomizeUtils.getUuid();
        return (
            this.props.customerDetailData.length !== 0 &&
            <FormControl disabled>
                <InputLabel htmlFor={"Id_" + this.state.id + "_" + formControlUuid}>ID: </InputLabel>
                <Input id={"Id_" + this.state.id + "_" + formControlUuid} value={this.state.id} />

                <InputLabel htmlFor={"Name_" + this.state.customerName + "_" + formControlUuid}>Customer Name: </InputLabel>
                <Input id={"Name_" + this.state.customerName + "_" + formControlUuid} value={this.state.customerName} />

                <InputLabel htmlFor={"Date_" + this.state.createdDate + "_" + formControlUuid}>Created Date: </InputLabel>
                <Input id={"Date_" + this.state.createdDate + "_" + formControlUuid} value={this.state.createdDate} />
            </FormControl>
        )
    }
}