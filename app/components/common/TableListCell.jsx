import React from 'react';
import _ from "lodash";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import UuidUtils from "../../utils/UuidUtil";

export default class TableListCell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { tableCellClass, tableCellList } = this.props;
        return (

            tableCellList.map((tableCellValue, tableCellIndex) => {
                let tableRowUuid = UuidUtils.getUuid();
                return (() => (
                    <TableRow key={`${tableCellClass}_row_${tableRowUuid}`}>
                        {
                            tableCellValue.map((options, offsetIndex) => {
                                return <TableCell key={tableCellClass + "_" + tableRowUuid + '_' + tableCellIndex + '_' + offsetIndex}>{options}</TableCell>;
                            })
                        }
                    </TableRow>
                ))()
            })

        )
    }
};