import React from 'react';
import TableCell from "./TableCell";
export default class TableListHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tableListHeader">
                <TableCell />
            </div>
        )
    }
};