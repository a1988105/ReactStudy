import React, { Component } from 'react';
import Keyboard from './keyboard';
import Result from './Result';
import Historys from './historys';

const kbdata = [[1,2,3,'+','-']];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value   : 0,
            baseNum : 1,
            history : []
        };
    }
    handleFn = (p) => {
        switch (p)
        {
            case '+':
            {
                let record = { text: '操作 +'+ this.state.baseNum, operate: '-' , value: this.state.baseNum};
                this.state.history.push(record);
                this.setState({
                    value : this.state.value + this.state.baseNum
                })
                break;
            }
            case '-':
            {
                let record = { text: '操作 -'+ this.state.baseNum, operate: '+' , value: this.state.baseNum};
                this.state.history.push(record);
                this.setState({
                    value : this.state.value - this.state.baseNum
                })
                break;
            }
            default:
            this.setState({
                baseNum : p
            })
        }
    }

    rollbackFn = (data,index) => {
        data.operate == '+' ? 
        (
            this.setState({
                value : this.state.value + data.value
            })

        ):
        (
            this.setState({
                value : this.state.value - data.value
            })
        );
        this.state.history.splice(index,1);
    }

    render() {
        return (
            <div>
                <Result val={this.state.value} />
                <Keyboard onClickfn={this.handleFn} kb={kbdata} bNum={this.state.baseNum} />
                <Historys data ={this.state.history} onClickfn={this.rollbackFn} />
            </div>
        )
    }
}


module.exports = App;