import React from 'react';
import PropTypes from "prop-types";
import TableBody from '@material-ui/core/TableBody';

import TableListCell from "./TableListCell";

export default class TableListBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableBody className="tableListBody">
                <TableListCell tableCellList={this.props.tableBody} tableCellClass="tableBodyCell" />
            </TableBody>
        )
    }
};

TableListBody.propTypes = {
    tableBody: PropTypes.array.isRequired
}