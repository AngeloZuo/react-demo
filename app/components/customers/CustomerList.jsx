import React from 'react';
import ReactDOM from 'react-dom';
import TableList from "../common/TableList";

export default class CustomerList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TableList lists={this.props.lists} />
            </div>
        )
    }
};