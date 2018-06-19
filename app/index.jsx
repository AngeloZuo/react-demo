import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Layout, Icon } from "antd";

import store from "./store";
import Main from './components/Main';
import AzHeader from './components/header/AzHeader';
import AzFooter from './components/footer/AzFooter';

import './index.scss';

const { Content } = Layout;
const headerConfig = {
    defaultTab: 0,
    tabsList: [{
        labelPath: {
            pathname: '/'
        },
        labelContent: <Icon type="home" style={{ fontSize: 16, color: '#fff', marginRight: 0 }} />,
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
    }]
};

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/">
            <Layout className="panel">
                <AzHeader headerConfig={headerConfig} />
                <Content style={{ padding: "0 50px", marginTop: 64 }}>
                    <Main />
                </Content>
                <AzFooter />
            </Layout>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);