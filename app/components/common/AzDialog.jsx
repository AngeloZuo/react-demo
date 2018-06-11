import React from "react";
import Modal from "antd/lib/modal";

export default class AzDialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({
                visible: true
            })
        }
    }

    handleCancel() {
        this.props.onChangeDialogStatus();
    }

    handleOk() {
        this.props.onChangeDialogStatus();
    }

    render() {

        return (
            <Modal
                footer={null}
                title={this.props.title}
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                {this.props.children}
            </Modal>
        )
    }
}