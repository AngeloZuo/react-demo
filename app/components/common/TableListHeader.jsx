import React from 'react';
import PropTypes from "prop-types";
import TableHead from '@material-ui/core/TableHead';

import TableListCell from "./TableListCell";
export default class TableListHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableHead className="tableListHeader">
                <TableListCell tableCellList={this.props.tableHeader} tableCellClass="tableHeaderCell" />
            </TableHead>
        )
    }
};

TableListHeader.propTypes = {
    tableHeader: PropTypes.array.isRequired
}