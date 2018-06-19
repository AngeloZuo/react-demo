import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";

const TableList = props => {
    const { tableConfig, lists, checkboxSelection } = props;
    return (
        <Table
            className="tableList"
            rowKey="id"
            rowSelection={checkboxSelection}
            columns={tableConfig}
            dataSource={lists}
        />
    );
};

TableList.propTypes = {
    tableConfig: PropTypes.array.isRequired
};

export default TableList;
