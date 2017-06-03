import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value   : 0,
            kbdata  : [
                [7,8,9,'C'],
                [4,5,6,'+'],
                [1,2,3,'-'],
                [0,'.','','=']
            ]
        };
    }
    handleFn = (action ,p) => {
        switch (action)
        {
            case 'add':
            {
                p = +p + 1;
            }
            default:
            break;
        }
        this.setState({
            value : p
        })
    }
    render() {
        const Keyboard = require('./keyboard.js')
        const Result = require('./Result.js')
        return (
            <div>
                <Result val={this.state.value} />
                <Keyboard onChange={this.handleFn} />
            </div>
        )
    }
}

module.exports = App;