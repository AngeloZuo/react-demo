import React from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";

import CustomizeUtils from "../../utils/CustomizeUtils";

export default function AzMenu(props) {
    const { tabsValue, onChange, tabsList } = props;
    const tabUuid = CustomizeUtils.getUuid();
    return (
        <Tabs value={tabsValue} onChange={onChange}>
            {
                tabsList.map((tabObj, tabKey) => {
                    return <Tab 
                        key={`AzMenuTab_${tabUuid}_${tabKey}`}
                        label={
                            <Link to={tabObj.labelPath}>{tabObj.labelContent}</Link>
                        }
                        value={tabObj.labelValue}
                    />
                })
            }
        </Tabs>
    )
}