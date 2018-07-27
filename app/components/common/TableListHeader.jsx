import React from "react";
import PropTypes from "prop-types";
import TableHead from "@material-ui/core/TableHead";

import TableListCell from "./TableListCell";
const TableListHeader = props => (
  <TableHead className="tableListHeader">
    <TableListCell
      tableCellList={props.tableHeader}
      tableCellClass="tableHeaderCell"
    />
  </TableHead>
);

TableListHeader.propTypes = {
  tableHeader: PropTypes.array.isRequired
};

export default TableListHeader;
