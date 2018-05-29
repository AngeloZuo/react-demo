import React from 'react';
import PropTypes from "prop-types";
import _ from "lodash";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import CustomizeUtils from "../../utils/CustomizeUtils";
import formatTableCellUtil from "../../utils/tableCellUtil";

export default class TableListCell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { tableCellClass, tableCellList } = this.props;
        return (

            tableCellList.map((tableCellValue, tableCellIndex) => {
                let tableRowUuid = CustomizeUtils.getUuid();
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
    }
};

TableListCell.propTypes = {
    tableCellClass: PropTypes.string.isRequired,
    tableCellList: PropTypes.array.isRequired
}

TableListCell.defaultProps = {
    tableCellClass: ""
}