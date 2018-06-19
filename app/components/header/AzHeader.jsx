import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Layout } from "antd";

import AzMenu from "../common/AzMenu";

const { Header } = Layout;

export default class AzHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            tabValue: this.props.headerConfig.defaultTab
        };
    }

    handleChange = (event, tabValue) => {
        this.setState({ tabValue });
    };

    render() {
        return (
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                <AzMenu
                    defaultTab={this.state.tabValue}
                    onChange={this.handleChange}
                    tabsList={this.props.headerConfig.tabsList}
                />
            </Header>
        );
    }
}

AzHeader.propTypes = {
    headerConfig: PropTypes.object.isRequired
};
