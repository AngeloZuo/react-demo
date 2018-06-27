import React from "react";
import { Icon, Popconfirm } from "antd";

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
                            <div>
                                <Icon className="authPage_userIcon" type="user" />
                                <span className="authPage_iconContent">
                                    {isAuthenticated ? (
                                        <Popconfirm
                                            title="Do you want to log out?"
                                            onConfirm={logout}
                                            okText="Yes"
                                            cancelText="No"
                                            placement="bottom"
                                        >
                                            <span>{userName}</span>
                                        </Popconfirm>
                                    ) : (
                                        <span onClick={this.changeDialogStatus}>Log in</span>
                                    )}
                                </span>
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
