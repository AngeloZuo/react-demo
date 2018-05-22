import React from 'react';
import TableHead from '@material-ui/core/TableHead';

import TableListCell from "./TableListCell";
export default class TableListHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <TableHead className="tableListHeader">
                <TableListCell tableCellList={this.props.tableHeader} tableCellClass="tableHeaderCell" />
            </TableHead>
        )
    }
};