import React, { Component } from 'react';
import Keyboard from './keyboard';
import Result from './Result';
import Historys from './historys';
import Constant from './Constant/keyboardData';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value   : 0,
            baseNum : 1,
            history : []
        };
    }
    calculateFn = (enterValue) => {
        let {state}  = this;
        let newhistory = [];
        newhistory.push(...state.history);
        switch (enterValue)
        {
            case '+':
            {
                let record = { text: '操作 +'+ state.baseNum, operate: '-' , value: state.baseNum};
                newhistory.push(record);
                this.setState({
                    value   : state.value + state.baseNum,
                    history : newhistory
                })
                break;
            }
            case '-':
            {
                let record = { text: '操作 -'+ state.baseNum, operate: '+' , value: state.baseNum};
                newhistory.push(record);
                this.setState({
                    value   : state.value - state.baseNum,
                    history : newhistory
                })
                break;
            }
            default:
            this.setState({
                baseNum : enterValue
            })
        }
    }

    rollbackFn = (data,index) => {
        let {state} = this;
        let newhistory = [];
        newhistory.push(...state.history);
        newhistory.splice(index,1);
        data.operate == '+' ? 
        (
            this.setState({
                value   : state.value + data.value,
                history : newhistory
            })

        ) :
        (
            this.setState({
                value   : state.value - data.value,
                history : newhistory
            })
        );

    }

    render() {
        return (
            <div>
                <Result val={this.state.value} />
                <Keyboard calculatefn={this.calculateFn} keyboardData={Constant.keyboardData} baseNum={this.state.baseNum} />
                <Historys data ={this.state.history} rollbackFn={this.rollbackFn} />
            </div>
        )
    }
}


module.exports = App;