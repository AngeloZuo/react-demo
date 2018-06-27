import React from "react";
import { Icon } from "antd";

import AzDialog from "../common/AzDialog";
import AuthContainer from "../../auth/AuthContainer";
import AuthSection from "./AuthSection";
class AuthPage extends React.Component {
    state = {
        visibleDialog: false,
        dialogTitle: "Login",
        userName: ""
    };

    changeDialogStatus = () => {
        this.setState({
            visibleDialog: !this.state.visibleDialog
        });
    };

    afterLogin = userName => {
        this.setState({
            visibleDialog: false,
            userName
        });
    };

    render() {
        const { visibleDialog, dialogTitle, userName } = this.state;
        return (
            <AuthContainer afterLogin={this.afterLogin}>
                {({ login, logout, isAuthenticated, errorMsg, confirming }) => {
                    return (
                        <div className="authPage_container">
                            <div onClick={this.changeDialogStatus}>
                                <Icon className="authPage_userIcon" type="user" />
                                <label className="authPage_iconContent">
                                    {isAuthenticated ? userName : "Log in"}
                                </label>
                            </div>

                            <AzDialog
                                classes=""
                                visible={visibleDialog}
                                onChangeDialogStatus={this.changeDialogStatus}
                                title={dialogTitle}
                            >
                                <AuthSection
                                    onLogin={login}
                                    onLogout={logout}
                                    errorMsg={errorMsg}
                                    confirming={confirming}
                                />
                            </AzDialog>
                        </div>
                    );
                }}
            </AuthContainer>
        );
    }
}

export default AuthPage;
