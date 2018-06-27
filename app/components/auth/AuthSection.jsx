import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Input, Icon, Spin, Alert } from "antd";
import PropTypes from "prop-types";

const createInputElem = (prefix, eventhandler, { field, ...formProps }) => {
    return (
        <div
            style={{
                display: "inline-block",
                marginBottom: 16,
                marginRight: 16,
                width: "100%"
            }}
        >
            <Input {...field} {...formProps} prefix={prefix} onChange={eventhandler} />
        </div>
    );
};

class AuthSection extends React.Component {
    render() {
        const { onLogin, onLogout, confirming, errorMsg } = this.props;
        return (
            <Spin spinning={confirming}>
                <Formik
                    initialValues={{ name: "", password: "" }}
                    onSubmit={onLogin}
                    render={({ handleChange, handleSubmit }) => (
                        <Form noValidate className="">
                            <div>
                                {typeof errorMsg === "string" ? (
                                    <Alert
                                        style={{ marginBottom: "10px" }}
                                        message={errorMsg}
                                        type="error"
                                        showIcon
                                    />
                                ) : null}

                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Please enter your name"
                                    component={({ field, ...formProps }) => {
                                        const prefixIcon = (
                                            <Icon
                                                type="user"
                                                style={{ color: "rgba(0,0,0,.25)" }}
                                            />
                                        );
                                        return createInputElem(prefixIcon, handleChange, {
                                            field,
                                            ...formProps
                                        });
                                    }}
                                />

                                <Field
                                    type="text"
                                    name="password"
                                    type="password"
                                    placeholder="Please enter your passsword"
                                    component={({ field, ...formProps }) => {
                                        const prefixIcon = (
                                            <Icon
                                                type="lock"
                                                style={{ color: "rgba(0,0,0,.25)" }}
                                            />
                                        );
                                        return createInputElem(prefixIcon, handleChange, {
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
            </Spin>
        );
    }
}

AuthSection.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    confirming: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string
};

AuthSection.defaultProps = {
    errorMsg: null
};

export default AuthSection;
