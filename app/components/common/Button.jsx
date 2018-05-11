import React from 'react';

export default class Button extends React.Component {
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