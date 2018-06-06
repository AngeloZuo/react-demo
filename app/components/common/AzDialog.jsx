import React from "react";
import Modal from "antd/lib/modal";

export default class AzDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

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
        this.setState({
            visible: false
        })
        this.props.onChangeDialogStatus();
    }

    handleOk() {
        this.setState({
            visible: false
        })
        this.props.onChangeDialogStatus();
    }

    render() {

        return (
            <Modal
                footer={null}
                title={this.props.title}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                {this.props.children}
            </Modal>
        )
    }
}