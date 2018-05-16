import React from 'react';
import _ from "lodash";

export default class TableCell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tableCellList = this.props.tableCellList;
        return (
            <div className="tableCell">
                {
                    tableCellList.map((tableCellValue, tableCellIndex) => {
                        if (_.isArray(tableCellValue)) {
                            {
                                return (() => (
                                    tableCellValue.map((options, offsetIndex) => {
                                        return <div key={'tableBodyCell_' + tableCellIndex + '_' + offsetIndex}>{options}</div>;
                                    })
                                ))()
                            }
                        } else {
                            return <div key={'tableHeaderCell_' + tableCellIndex}>{tableCellValue}</div>
                        }
                    })
                }
            </div>
        )
    }
};