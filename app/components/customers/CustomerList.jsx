import React from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';

import TableList from "../common/TableList";

export default class CustomerList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper>
                <TableList lists={this.props.lists} />
            </Paper>
        )
    }
};