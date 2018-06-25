import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";

const TableList = props => {
    const { tableConfig, lists, checkboxSelection, rowKey, loading, pagination } = props;
    return (
        <Table
            className="tableList"
            rowKey={rowKey}
            rowSelection={checkboxSelection}
            columns={tableConfig}
            dataSource={lists}
            loading={loading}
            pagination={pagination}
        />
    );
};

TableList.propTypes = {
    tableConfig: PropTypes.array.isRequired,
    lists: PropTypes.array.isRequired,
    checkboxSelection: PropTypes.object.isRequired,
    rowKey: PropTypes.string
};

TableList.defaultProps = {
    tableConfig: [],
    lists: [],
    checkboxSelection: {},
    rowKey: "id"
};

export default TableList;
