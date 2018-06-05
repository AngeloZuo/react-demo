import React from 'react';
import PropTypes from "prop-types";
import _ from "lodash";
import Table from 'antd/lib/table';
import TableListHeader from "./TableListHeader";
import TableListBody from "./TableListBody";

import CustomizeUtils from "../../utils/CustomizeUtils";

const TableList = (props) => {
    const { tableConfig, lists, checkboxSelection } = props;
    return (
        <Table className="tableList"
            rowKey="id"
            rowSelection={checkboxSelection}
            columns={tableConfig}
            dataSource={lists}
        >
        </Table>
    )
};

TableList.propTypes = {
    tableConfig: PropTypes.array.isRequired
}

export default TableList;