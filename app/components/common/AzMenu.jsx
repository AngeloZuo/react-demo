import React from "react";
import PropTypes from "prop-types";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";

import CustomizeUtils from "../../utils/CustomizeUtils";

export default function AzMenu(props) {
    const { defaultTab, onChange, tabsList } = props;
    const tabUuid = CustomizeUtils.getUuid();
    return (
        <Tabs value={defaultTab} onChange={onChange}>
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

AzMenu.propTypes = {
    defaultTab: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    tabsList: PropTypes.array.isRequired
}

AzMenu.defaultProps = {
    defaultTab: "",
    tabsList: []
}