import React from "react";
import PropTypes from "prop-types";
import TableBody from "@material-ui/core/TableBody";

import TableListCell from "./TableListCell";

const TableListBody = ({ tableBody }) => (
  <TableBody className="tableListBody">
    <TableListCell tableCellList={tableBody} tableCellClass="tableBodyCell" />
  </TableBody>
);

TableListBody.propTypes = {
  tableBody: PropTypes.array.isRequired
};

export default TableListBody;
