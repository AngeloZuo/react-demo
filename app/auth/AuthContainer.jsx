import React from "react";
import PropTypes from "prop-types";

import { authRequest } from "../actions/authActions";
class AuthContainer extends React.Component {
    state = {
        isAuthenticated: false,
        errorMsg: null,
        confirming: false
    };

    login = userInfo => {
        this.setState({
            confirming: true
        });
        authRequest(userInfo).then(result => {
            console.log("=result=", result.isAuth);
            if (result.isAuth) {
                this.setState({
                    isAuthenticated: true,
                    confirming: false,
                    errorMsg: null
                });
                this.props.afterLogin(userInfo.name);
            } else {
                this.setState({
                    isAuthenticated: false,
                    confirming: false,
                    errorMsg: "Login failed, please check your user name and password!"
                });
            }
        });
    };

    logout = () => {
        console.log("Logout");
    };

    render() {
        const { isAuthenticated, errorMsg, confirming } = this.state;
        return this.props.children({
            login: this.login,
            logout: this.logout,
            isAuthenticated,
            errorMsg,
            confirming
        });
    }
}

AuthContainer.propTypes = {
    afterLogin: PropTypes.func.isRequired
}

export default AuthContainer;
