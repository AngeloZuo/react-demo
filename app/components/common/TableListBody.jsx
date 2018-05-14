import React from 'react';
import TableCell from "./TableCell";

export default class TableListBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tableListBody">
                <TableCell />
            </div>
        )
    }
};