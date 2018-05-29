import React from 'react';
import PropTypes from "prop-types";
import _ from "lodash";
import Table from '@material-ui/core/Table';
import TableListHeader from "./TableListHeader";
import TableListBody from "./TableListBody";

import CustomizeUtils from "../../utils/CustomizeUtils";

const TableList = (props) => {
    let { tableConfig, lists } = props;

    let tabelHeaderProps = {};
    let tabelBodyProps = {};
    let tableHeader = [];
    let tableBody = [];
    let tempHeaderArray = [];
    _.forEach(lists, (arrayChild, arrayKey) => {
        let tempBodyArray = [];
        let tempTableCellConfigObj = [];
        _.forEach(arrayChild, (value, key) => {
            if (key !== 'tableCellConfig') {
                if (tempHeaderArray.indexOf(key) < 0) {
                    tempHeaderArray.push(key);
                }
                tempBodyArray.push(value);
            } else {
                tempTableCellConfigObj.push(value);
            }

        })

        if (tempBodyArray.length !== 0) {
            if (tableConfig.hasCheckbox) {
                tempBodyArray = _.concat(tempTableCellConfigObj, tempBodyArray)
            }
            tableBody.push(tempBodyArray);
        }
    })

    if (tempHeaderArray.length !== 0) {
        if (tableConfig.hasCheckbox) {
            tempHeaderArray = _.concat([tableConfig.tableHeadCellConfig], tempHeaderArray)
        }

        tableHeader.push(tempHeaderArray);
    }

    tabelHeaderProps = { tableHeader };
    tabelBodyProps = { tableBody };

    return (
        <Table className="tableList">
            <TableListHeader {...tabelHeaderProps} />
            <TableListBody {...tabelBodyProps} />
            {props.children}
        </Table>
    )
};

TableList.propTypes = {
    tableConfig: PropTypes.object.isRequired
}

export default TableList;