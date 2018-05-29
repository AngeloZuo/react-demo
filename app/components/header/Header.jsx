import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';

import MENU_CONFIG from "../../config/config";
import AzMenu from "../common/AzMenu";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            tabValue: this.props.headerConfig.defaultTab
        }
    }

    handleChange = (event, tabValue) => {
        this.setState({ tabValue });
    };

    render() {
        return (
            <div className="header">
                <AppBar>
                    <AzMenu defaultTab={this.state.tabValue} onChange={this.handleChange} tabsList={this.props.headerConfig.tabsList} />
                </AppBar>
            </div>
        )
    }
}

Header.propTypes = {
    headerConfig: PropTypes.object.isRequired
}