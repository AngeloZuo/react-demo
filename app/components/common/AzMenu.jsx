import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import CustomizeUtils from "../../utils/CustomizeUtils";

const AzMenu = (props) => {
    const { defaultTab, onChange, tabsList } = props;

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultTab.toString()]}
            style={{ lineHeight: "64px" }}
            onClick={onChange}
        >
            {tabsList.map((tabObj, tabKey) => {
                return (
                    <Menu.Item key={tabKey}>
                        <Link to={tabObj.labelPath}>{tabObj.labelContent}</Link>
                    </Menu.Item>
                );
            })}
        </Menu>
    );
}

AzMenu.propTypes = {
    defaultTab: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    tabsList: PropTypes.array.isRequired
};

AzMenu.defaultProps = {
    defaultTab: 0,
    tabsList: []
};

export default AzMenu;