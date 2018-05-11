import React from 'react';

export default class InputBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input 
                className="custom_inputBox" 
                type="text"
                value={this.props.value}
                placeholder={this.props.placeholder || ""}
                onChange={this.props.onChange}
            />
        )
    }
};