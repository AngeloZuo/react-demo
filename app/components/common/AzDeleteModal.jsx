import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";

const confirm = Modal.confirm;

class AzDeleteModal extends React.Component {
    state = {
        visible: false,
        confirmLoading: false,
        ModalText: ""
    };

    openDeleteDialog() {
        this.setState({
            visible: true
        });
    }

    handleOk() {
        this.setState({
            confirmLoading: true
        });
        props.onDeleteClick();
        this.setState({
            visible: false,
            confirmLoading: false
        });
    }

    handleCancel() {
        this.setState({
            visible: false
        });
    }

    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div>
                <Button type="danger" icon="delete" onClick={this.openDeleteDialog}>
                    Delete
                </Button>
                <Modal
                    title=""
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <p>{ModalText}</p>
                </Modal>
            </div>
        );
    }
}

AzDeleteModal.propTypes = {
    onDeleteClick: PropTypes.func.isRequired,
    deleteInfo: PropTypes.array.isRequired
};

AzDeleteModal.defaultProps = {
    onDeleteClick: () => {},
    deleteInfo: []
};

export default AzDeleteModal;
