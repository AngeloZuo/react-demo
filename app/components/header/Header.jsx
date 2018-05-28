import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '@material-ui/icons/Home';
import { Link } from "react-router-dom";

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

        return (
            <div className="header">
                <AppBar>
                    <Tabs value={this.state.value} onChange={this.handleChange}>
                        <Tab
                            label={
                                <Link to={{
                                    pathname: '/'
                                }}>{<Home />}</Link>
                            }
                            value="Home"
                        />
                        <Tab
                            label={
                                <Link to={{
                                    pathname: '/customerSearch'
                                }}>Customer Search</Link>
                            }
                            value="Customer Search"
                        />
                        <Tab
                            label={
                                <Link to={{
                                    pathname: '/memberPoints'
                                }}>Member Points</Link>
                            }
                            value="Member Points"
                        />
                    </Tabs>
                </AppBar>
            </div>
        )
    }
}