import React from 'react';
import ReactDOM from 'react-dom';

import CustomizeUtils from "../../utils/CustomizeUtils";
import TableList from "../common/TableList";

const CustomerList = (props) => {
    function getLinkElement(displayContent) {
        return <a
            href="javascript:void(0);"
            onClick={props.onClickIdLink}
        >
            {displayContent}
        </a>
    }

    const tableConfig = [{
        title: 'ID',
        dataIndex: 'ID',
        render: (displayContent) => getLinkElement(displayContent),
    }, {
        title: 'Customer Name',
        dataIndex: 'Customer Name',
    }, {
        title: 'Created Date',
        dataIndex: 'Created Date',
    }, {
        title: 'Member Points',
        dataIndex: 'Member Points',
    }];

    const tableHeadCellId = 'TableBodyChb_Header';
    let formatData = customizeData(props.lists);

    function customizeData(originData) {
        let tableHeadCellConfig = {};
        if (tableConfig.hasCheckbox) {
            tableHeadCellConfig = CustomizeUtils.getCheckboxObj({
                value: tableHeadCellId,
                id: tableHeadCellId,
                checked: false,
                onActionFunc: function (event) {
                    (function (event) {
                        self.selectCheckBox(event)
                    })(event)
                }
            })

            tableConfig['tableHeadCellConfig'] = tableHeadCellConfig;
        }
        _.forEach(originData, (arrayChild, arrayChildKey) => {
            if (tableConfig.hasCheckbox) {
                let checkBoxObj = CustomizeUtils.getCheckboxObj({
                    value: `TableBodyChb_${arrayChildKey}`,
                    id: `TableBodyChb_${arrayChild["id"]}`,
                    checked: false,
                    onActionFunc: function (event) {
                        (function (event) {
                            self.selectCheckBox(event)
                        })(event)
                    }
                })

                arrayChild['tableCellConfig'] = checkBoxObj;
            }

            _.forEach(arrayChild, (arraySubValue, arraySubKey) => {
                if (arraySubKey === 'id') {
                    arrayChild[arraySubKey] = CustomizeUtils.getLinkConfigObj({
                        value: arraySubValue,
                        onActionFunc: function () {
                            actionFunc({
                                searchType: "CUSTOMER_DETAIL_SEARCH",
                                conditions: {
                                    id: arraySubValue
                                }
                            })
                        }
                    })
                }
            });
        })
        return originData;
    }

    return <TableList lists={props.lists} tableConfig={tableConfig} />;
}

export default CustomerList;