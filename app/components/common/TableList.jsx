import React from 'react';
import _ from "lodash";

import TableListHeader from "./TableListHeader";
import TableListBody from "./TableListBody";

export default class TableList extends React.Component {
    constructor(props) {
        super(props);

        this.tableHeader = [];
        this.tableBody = [];//_concat([], this.props.lists);

        _.forEach(this.props.lists, (arrayChild, arrayKey) => {
            let tempArray = [];
            _.forEach(arrayChild, (value, key) => {
                if (this.tableHeader.indexOf(key) < 0) {
                    this.tableHeader.push(key);
                }
                tempArray.push(value);
            })

            this.tableBody.push(tempArray);
        })
    }

    render() {
        return (
            <div className="tableList">
                <TableListHeader tableHeader={this.tableHeader}/>
                <TableListBody tableBody={this.tableBody} />
            </div>
        )
    }
};