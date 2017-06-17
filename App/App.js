import React, { Component } from 'react';
import Keyboard from './Component/keyboard';
import Result from './Component/Result';
import Historys from './Component/historys';
import Constant from './Constant/keyboardData';
import { connect } from 'react-redux';
import action from './Action/Action';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            state:{
                value,
                baseNum,
                history
            },
            onCalculate,
            onRollback,
            fetchData
        } = this.props;
        return (
            <div>
                <Result val={value} />
                <Keyboard calculatefn={onCalculate} keyboardData={Constant.keyboardData} baseNum={baseNum} />
                <Historys data ={history} rollbackFn={onRollback} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return { state };
}
const mapDispatchToProps = (dispatch) => ({
    onCalculate : (num) => dispatch(action.calculate(num)),
    onRollback  : (data,index) => dispatch(action.rollback(data, index)),
    fetchData   : () => dispatch(action.fetchData())
});


module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);