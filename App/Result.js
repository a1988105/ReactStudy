import React from 'react';
import ReactDOM from 'react-dom';


class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value  : 0
        };
    }
    handleChange = (e) => {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange('', e.target.value);
        }
    }
    render() {
        return(
            <div className='result'>{this.props.val}</div>
        )
    }
}

module.exports = Result;