import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './index.scss';

ReactDOM.render(
    <div className="panel">
        <Header />
        <Main />
        <Footer />
    </div>,
    document.querySelector("#root")
);