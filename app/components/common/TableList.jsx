import React from 'react';
import _ from "lodash";
import Table from '@material-ui/core/Table';
import TableListHeader from "./TableListHeader";
import TableListBody from "./TableListBody";

export default class TableList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tableHeader = [];
        let tableBody = [];

        let tempHeaderArray = [];

        _.forEach(this.props.lists, (arrayChild, arrayKey) => {
            let tempBodyArray = [];
            _.forEach(arrayChild, (value, key) => {
                if (tempHeaderArray.indexOf(key) < 0) {
                    tempHeaderArray.push(key);
                }
                tempBodyArray.push(value);
            })

            tableBody.push(tempBodyArray);
        })

        tableHeader.push(tempHeaderArray);
        

        return (
            <Table className="tableList">
                <TableListHeader tableHeader={tableHeader}/>
                <TableListBody tableBody={tableBody}/>
            </Table>
        )
    }
};