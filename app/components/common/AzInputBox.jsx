import React from 'react';
import PropTypes from "prop-types";

export default class AzInputBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input 
                className="custom_inputBox" 
                type="text"
                value={this.props.value}
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}
            />
        )
    }
};

AzInputBox.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

AzInputBox.defaultProps = {
    placeholder: ""
}