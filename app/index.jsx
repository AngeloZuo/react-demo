import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import store from "./store";
import Main from './components/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <div className="panel">
            <Header />
            <Main />
            <Footer />
        </div>
    </Provider>,
    document.querySelector("#root")
);