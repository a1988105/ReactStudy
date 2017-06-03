import React from 'react';
import ReactDOM from 'react-dom';


class Result extends React.Component {
    render() {
        return(
            <div className='result'>{this.props.val}</div>
        )
    }
}

module.exports = Result;