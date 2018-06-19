import React from 'react';
import PropTypes from "prop-types";
import Table from 'antd/lib/table';

const TableList = (props) => {
    const { tableConfig, lists, checkboxSelection } = props;
    return (
        <Table className="tableList"
            rowKey="_id"
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