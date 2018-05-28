import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Home from '@material-ui/icons/Home';

import MENU_CONFIG from "../../config/config";
import AzMenu from "../common/AzMenu";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Home'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const tabsList = [{
            labelPath: {
                pathname: '/'
            },
            labelContent: <Home />,
            labelValue: "Home"
        },
        {
            labelPath: {
                pathname: '/customerSearch'
            },
            labelContent: "Customer Search",
            labelValue: "Customer Search"
        },
        {
            labelPath: {
                pathname: '/memberPoints'
            },
            labelContent: 'Member Points',
            labelValue: 'Member Points'
        }];
        return (
            <div className="header">
                <AppBar>
                    <AzMenu tabsValue={this.state.value} onChange={this.handleChange} tabsList={tabsList} />
                </AppBar>
            </div>
        )
    }
}