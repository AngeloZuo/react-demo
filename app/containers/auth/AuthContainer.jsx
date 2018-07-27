import React from "react";
import PropTypes from "prop-types";

import { authRequest } from "../../actions/authActions";
class AuthContainer extends React.Component {
  state = {
    isAuthenticated: false,
    errorMsg: null,
    confirming: false
  };

  login = async userInfo => {
    this.setState({
      confirming: true
    });
    const result = await authRequest(userInfo);
    if (result.isAuth) {
      this.setState({
        isAuthenticated: true,
        confirming: false,
        errorMsg: null
      });
      this.props.afterLogin(userInfo.name);
    } else {
      this.setState({
        confirming: false,
        errorMsg: "Login failed, please check your user name and password!"
      });
    }
  };

  logout = () => {
    this.setState({
      isAuthenticated: false
    });
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
};

export default AuthContainer;
