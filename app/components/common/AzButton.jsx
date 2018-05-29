import React from 'react';
import PropTypes from "prop-types";

export default class AzButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input 
                className="custom_button" 
                type="button" 
                value={this.props.btnValue}
                onClick={this.props.onClick}
            />
        )
    }
};

AzButton.propTypes = {
    btnValue: PropTypes.string.isRequired,
    onClick: PropTypes.string.isRequired
}

AzButton.defaultProps = {
    btnValue: ""
}