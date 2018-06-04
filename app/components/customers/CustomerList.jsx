import React from 'react';
import ReactDOM from 'react-dom';

import CustomizeUtils from "../../utils/CustomizeUtils";
import TableList from "../common/TableList";

const CustomerList = (props) => {
    function getLinkElement(displayContent) {
        return <a
            href="javascript:void(0);"
            onClick={() => props.onClickIdLink({id: displayContent})}
        >
            {displayContent}
        </a>
    }

    const tableConfig = [{
        title: 'ID',
        dataIndex: 'id',
        render: (displayContent) => getLinkElement(displayContent),
    }, {
        title: 'Customer Name',
        dataIndex: 'customerName',
    }, {
        title: 'Created Date',
        dataIndex: 'createdDate',
    }, {
        title: 'Member Points',
        dataIndex: 'memberPoints',
    }];

    return <TableList lists={props.lists} tableConfig={tableConfig} checkboxSelection={props.checkboxSelection}/>;
}

export default CustomerList;