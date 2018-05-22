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
        let tableConfig = this.props.tableConfig;

        let tabelHeaderProps = {};
        let tabelBodyProps = {};
        let tableHeader = [];
        let tableBody = [];
        let tempHeaderArray = [];
        let checkBoxObj = {};

        function createCheckBoxObj(value = "") {
            return {
                type: 'checkbox',
                checked: false,
                value: value,
                onActionFunc: function(event) {
                    tableConfig.onCheckboxFunc(event)
                }
            }
        }

        _.forEach(this.props.lists, (arrayChild, arrayKey) => {
            let tempBodyArray = [];
            _.forEach(arrayChild, (value, key) => {
                if (tempHeaderArray.indexOf(key) < 0) {
                    tempHeaderArray.push(key);
                }
                tempBodyArray.push(value);
            })

            if (tempBodyArray.length !== 0) {
                if (tableConfig.hasCheckbox) {
                    tempBodyArray = _.concat(createCheckBoxObj(`TableBodyChb_${tableBody.length}`), tempBodyArray)
                }
                tableBody.push(tempBodyArray);
            }
        })

        if (tempHeaderArray.length !== 0) {
            if (tableConfig.hasCheckbox) {
                tempHeaderArray = _.concat(createCheckBoxObj(`TableHeadChb`), tempHeaderArray)
            }
            
            tableHeader.push(tempHeaderArray);
        }

        tabelHeaderProps = { tableHeader, tableConfig };
        tabelBodyProps = { tableBody, tableConfig };

        return (
            <Table className="tableList">
                {tabelHeaderProps.tableHeader.length !== 0 && <TableListHeader {...tabelHeaderProps} />}
                {tabelBodyProps.tableBody.length !== 0 && <TableListBody {...tabelBodyProps} />}
            </Table>
        )
    }
};