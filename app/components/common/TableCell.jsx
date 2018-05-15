import React from 'react';
import _ from "lodash";

export default class TableCell extends React.Component {
    constructor(props) {
        super(props);
        this.tableCellList = this.props.tableCellList;
    }

    render() {
        return (
            <div className="tableCell">
                {
                    this.tableCellList.map((tableCellValue, tableCellIndex) => {
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