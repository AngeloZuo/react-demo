import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Input, Icon, Spin, Alert } from "antd";
import PropTypes from "prop-types";

const createInputElem = (prefix, { field, placeholder, type }) => {
    return (
        <div
            style={{
                display: "inline-block",
                marginBottom: 16,
                marginRight: 16,
                width: "100%"
            }}
        >
            <Input {...field} type={type} placeholder={placeholder} prefix={prefix} />
        </div>
    );
};

class AuthSection extends React.Component {
    render() {
        const { onLogin, confirming, errorMsg } = this.props;
        return (
            <Spin spinning={confirming}>
                <Formik
                    initialValues={{ name: "", password: "" }}
                    onSubmit={onLogin}
                    render={({ handleSubmit }) => {
                        return (
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
                                        render={({ field }) => {
                                            const prefixIcon = (
                                                <Icon
                                                    type="user"
                                                    style={{ color: "rgba(0,0,0,.25)" }}
                                                />
                                            );
                                            return createInputElem(prefixIcon, {
                                                field,
                                                type: "text",
                                                placeholder: "Please enter user name"
                                            });
                                        }}
                                    />

                                    <Field
                                        type="text"
                                        name="password"
                                        render={({ field }) => {
                                            const prefixIcon = (
                                                <Icon
                                                    type="lock"
                                                    style={{ color: "rgba(0,0,0,.25)" }}
                                                />
                                            );
                                            return createInputElem(prefixIcon, {
                                                field,
                                                type: "password",
                                                placeholder: "Please enter your passsword"
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
                        );
                    }}
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
