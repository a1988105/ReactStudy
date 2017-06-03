import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            kbdata: [
                [1, 2, 3, '+', '-']
            ],
            baseNum: 1
            /*
            kbdata  : [
                [7,8,9,'C'],
                [4,5,6,'+'],
                [1,2,3,'-'],
                ['  ','0',' ','=']
            ],
            operate : []
            */
        };
    }
    handleFn = (p) => {
        switch (p) {
            case '+':
                this.setState({
                    value: this.state.value + this.state.baseNum
                })
                break;
            case '-':
                this.setState({
                    value: this.state.value - this.state.baseNum
                })
                break;
            default:
                this.setState({
                    baseNum: p
                })
        }
    }
    render() {
        const Keyboard = require('./keyboard.js')
        const Result = require('./Result.js')
        return (
            <div>
                <Result val={this.state.value} />
                <Keyboard onClickfn={this.handleFn} kb={this.state.kbdata} bNum={this.state.baseNum} />
            </div>
        )
    }
}


module.exports = App;