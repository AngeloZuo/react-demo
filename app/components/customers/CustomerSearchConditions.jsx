import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../common/Button';
import InputBox from '../common/InputBox';

export default class CustomerSearchConditions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        return (
            <div>
                Name: <InputBox placeholder="Please enter search condition" value={this.state.inputValue} onChange={this.handleChange}/>
                <Button btnValue="Search" onClick={this.props.onClick}/>
            </div>
        )
    }
};