import React from 'react';
import PropTypes from "prop-types";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import formatTableCellUtil from "../../utils/tableCellUtil";

const TableListCell = (props) => {
    let { tableCellClass, tableCellList } = props;
    return (
        tableCellList.map((tableCellValue, tableCellIndex) => {
            return (() => (
                <TableRow key={`${tableCellClass}_row_${tableRowUuid}`}>
                    {
                        tableCellValue.map((value, offsetIndex) => {
                            return (
                                <TableCell
                                    key={tableCellClass + "_" + tableRowUuid + '_' + tableCellIndex + '_' + offsetIndex}
                                >
                                    {formatTableCellUtil(value)}
                                </TableCell>
                            );
                        })
                    }
                </TableRow>
            ))()
        })
    )
};

TableListCell.propTypes = {
    tableCellClass: PropTypes.string.isRequired,
    tableCellList: PropTypes.array.isRequired
}

TableListCell.defaultProps = {
    tableCellClass: ""
}

export default TableListCell;