import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../common/Button';
import InputBox from '../common/InputBox';

export default class CustomerSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Name: <InputBox placeholder="Please enter search condition" defaultValue="Test"/>
                <Button btnValue="Search" />
            </div>
        )
    }
};