import React from "react";

class AuthContainer extends React.Component {
    login = () => {
        console.log("Login");
    }

    logout = () => {
        console.log("Logout");
    }

    render() {
        return this.props.children({login, logout});
    }
}

export default AuthContainer;