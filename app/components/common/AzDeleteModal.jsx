import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";
class AzDeleteModal extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
    ModalText: ""
  };

  openDeleteDialog = () => {
    this.setState({
      visible: true,
      ModalText: `Do you want to delete ${this.props.deleteInfo.length} item${
        this.props.deleteInfo.length > 1 ? "s" : ""
      }?`
    });
  };

  handleOk = () => {
    this.setState({
      confirmLoading: true
    });
    this.props.onDeleteClick();
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasDeleted) {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }
  }

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

AzDeleteModal.propTypes = {
  onDeleteClick: PropTypes.func.isRequired,
  deleteInfo: PropTypes.array.isRequired,
  hasDeleted: PropTypes.bool.isRequired
};

AzDeleteModal.defaultProps = {
  onDeleteClick: () => {},
  deleteInfo: [],
  hasDeleted: false
};

export default AzDeleteModal;
