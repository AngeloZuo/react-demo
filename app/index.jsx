import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Home from '@material-ui/icons/Home';

import store from "./store";
import Main from './components/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './index.scss';

const headerConfig = {
    defaultTab: "Home",
    tabsList: [{
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
    }]
};

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/">
            <div className="panel">
                <Header headerConfig={headerConfig} />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);