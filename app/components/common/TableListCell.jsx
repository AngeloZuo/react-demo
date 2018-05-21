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
                return (() => (
                    <TableRow key={`${tableCellClass}_row_${UuidUtils.getUuid()}`}>
                        {
                            tableCellValue.map((options, offsetIndex) => {
                                return <TableCell key={tableCellClass + '_' + tableCellIndex + '_' + offsetIndex}>{options}</TableCell>;
                            })
                        }
                    </TableRow>
                ))()
            })

        )
    }
};