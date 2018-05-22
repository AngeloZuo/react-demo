import React from 'react';
import TableBody from '@material-ui/core/TableBody';

import TableListCell from "./TableListCell";

export default class TableListBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <TableBody className="tableListBody">
                <TableListCell tableCellList={this.props.tableBody} tableCellClass="tableBodyCell" />
            </TableBody>
        )
    }
};