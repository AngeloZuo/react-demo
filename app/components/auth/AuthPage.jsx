import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Input, Icon } from "antd";

import AzDialog from "../common/AzDialog";

const createInputElem = (addonBefore, eventhandler, { field, ...formProps }) => {
    return (
        <div
            style={{
                display: "inline-block",
                marginBottom: 16,
                marginRight: 16,
                width: "100%"
            }}
        >
            <Input {...field} {...formProps} addonBefore={addonBefore} onChange={eventhandler} />
        </div>
    );
};

class AuthPage extends React.Component {
    state = {
        visibleDialog: false,
        dialogTitle: "Login",
        loading: false
    };

    changeDialogStatus = () => {
        this.setState({
            visibleDialog: !this.state.visibleDialog
        });
    };

    render() {
        const { visibleDialog, dialogTitle, loading } = this.state;
        const { login, logout, isLogin } = this.props;
        return (
            <div className="authPage_container">
                <div onClick={this.changeDialogStatus}>
                    <Icon className="authPage_userIcon" type="user" />
                    <label className="authPage_iconContent">{isLogin ? "Log out" : "Log in"}</label>
                </div>

                <AzDialog
                    classes=""
                    visible={visibleDialog}
                    onChangeDialogStatus={this.changeDialogStatus}
                    title={dialogTitle}
                    confirmLoading={loading}
                >
                    <Formik
                        initialValues={{ name: "", password: "" }}
                        onSubmit={() => {}}
                        render={({ handleChange, handleSubmit }) => (
                            <Form noValidate className="">
                                <div>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Please enter your name"
                                        component={({ field, ...formProps }) => {
                                            return createInputElem("Name", handleChange, {
                                                field,
                                                ...formProps
                                            });
                                        }}
                                    />

                                    <Field
                                        type="text"
                                        name="password"
                                        placeholder="Please enter your passsword"
                                        component={({ field, ...formProps }) => {
                                            return createInputElem("Password", handleChange, {
                                                field,
                                                ...formProps
                                            });
                                        }}
                                    />

                                    <Button
                                        type="primary"
                                        icon="check"
                                        onClick={e => {
                                            handleSubmit(e);
                                        }}
                                    >
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        )}
                    />
                </AzDialog>
            </div>
        );
    }
}

export default AuthPage;
