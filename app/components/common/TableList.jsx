import React from 'react';
import _ from "lodash";

import TableListHeader from "./TableListHeader";
import TableListBody from "./TableListBody";

export default class TableList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tableHeader = [];
        let tableBody = [];

        _.forEach(this.props.lists, (arrayChild, arrayKey) => {
            let tempArray = [];
            _.forEach(arrayChild, (value, key) => {
                if (tableHeader.indexOf(key) < 0) {
                    tableHeader.push(key);
                }
                tempArray.push(value);
            })

            tableBody.push(tempArray);
        })

        return (
            <div className="tableList">
                <TableListHeader tableHeader={tableHeader}/>
                <TableListBody tableBody={tableBody} />
            </div>
        )
    }
};