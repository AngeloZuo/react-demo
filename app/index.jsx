import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";

import { setYupLocale, setSelectedMenu } from "./utils/CustomizeUtils";
import { headerConfig } from "./config/config";
import store from "./store";
import Main from "./components/Main";
import AzHeader from "./components/header/AzHeader";
import AzFooter from "./components/footer/AzFooter";

import "./index.scss";

// Override Yup function for displaying meaningful error message
setYupLocale();

const formatHeaderConfig = setSelectedMenu(headerConfig);
const { Content } = Layout;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/">
            <Layout className="panel">
                <AzHeader headerConfig={formatHeaderConfig} />
                <Content style={{ padding: "0 50px", marginTop: 64 }}>
                    <Main />
                </Content>
                <AzFooter />
            </Layout>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);
