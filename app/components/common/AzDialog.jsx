import React from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
export default class AzDialog extends React.Component {
  constructor(props) {
    super(props);

    this.handleModalStatus = this.handleModalStatus.bind(this);
  }

  componentWillReceiveProps({ visible }) {
    if (visible) {
      this.setState({
        visible: true
      });
    }
  }

  handleModalStatus() {
    this.props.onChangeDialogStatus();
  }

  render() {
    const { title, visible } = this.props;
    return (
      <Modal
        footer={null}
        title={title}
        visible={visible}
        onOk={this.handleModalStatus}
        onCancel={this.handleModalStatus}
      >
        {this.props.children}
      </Modal>
    );
  }
}

AzDialog.propTypes = {
  onChangeDialogStatus: PropTypes.func.isRequired
};

AzDialog.defaultProps = {
  onChangeDialogStatus: function() {}
};
