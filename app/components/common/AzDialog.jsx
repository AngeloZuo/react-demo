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
        if (nextProps.dialogStatus.visible) {
            this.setState({
                visible: true
            })
        }
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    handleOk() {
        this.setState({
            visible: false
        })
    }

    render() {

        return (
            <Modal
                title={props.title}
                visible={state.visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {props.children}
            </Modal>
        )
    }
}