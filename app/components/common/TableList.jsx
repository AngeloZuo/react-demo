import React from 'react';

import TableListHeader from "./TableListHeader";
import TableListBody from "./TableListBody";

export default class TableList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tableList">
                <TableListHeader />
                <TableListBody />
            </div>
        )
    }
};