import React from "react";
import _ from "lodash";
import { Checkbox } from "@material-ui/core";

export default function formatTableCellUtil(tableCellObj) {
    if (_.isObject(tableCellObj)) {
        switch (tableCellObj.type) {
            case "checkbox":
                return (
                    <Checkbox
                        id={tableCellObj.id}
                        checked={tableCellObj.checked}
                        onChange={tableCellObj.onActionFunc}
                        value={tableCellObj.value}
                        color={tableCellObj.color || "primary"}
                    />
                )
            case "link":
                return (
                    <a 
                        href="javascript:void(0);"
                        onClick={tableCellObj.onActionFunc}
                    >
                        {tableCellObj.value}
                    </a>
                )
            default:
                return tableCellObj;
        }

    } else {
        return tableCellObj;
    }
}