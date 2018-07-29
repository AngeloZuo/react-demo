import React from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import formatTableCellUtil from "../../utils/tableCellUtil";

const TableListCell = ({ tableCellList }) => {
  return tableCellList.map((tableCellValue, tableCellIndex) => {
    return (() => (
      <TableRow key={tableCellIndex}>
        {tableCellValue.map((value, offsetIndex) => {
          return (
            <TableCell key={offsetIndex}>
              {formatTableCellUtil(value)}
            </TableCell>
          );
        })}
      </TableRow>
    ))();
  });
};

TableListCell.propTypes = {
  tableCellList: PropTypes.array.isRequired
};

export default TableListCell;
