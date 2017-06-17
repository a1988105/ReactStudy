import { 
    CALCULATE, 
    FETCHDATASUCCESS,
    ROLLBACK
} from './Action/ActionType';

const initState = {
    value   : 0,
    baseNum : 1,
    history : []
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case CALCULATE:
        {
            let newhistory = [];
            switch (action.entervalue)
            {
                case '+': 
                {
                    let record = { text: '操作 +'+ state.baseNum, operate: '-' , value: state.baseNum};
                    newhistory.push(...state.history);
                    newhistory.push(record);
                    return {
                        ...state,
                        value: state.value + state.baseNum,
                        history : newhistory
                    };
                }
                case '-':
                {
                    let record = { text: '操作 -'+ state.baseNum, operate: '+' , value: state.baseNum};
                    newhistory.push(...state.history);
                    newhistory.push(record);
                    return {
                        ...state,
                        value: state.value - state.baseNum,
                        history : newhistory
                    };
                }
                default:
                {
                    return {
                        ...state,
                        baseNum : action.entervalue
                    };
                }
            }
        }
        case FETCHDATASUCCESS:
            return {
                ...state,
                baseNum : action.baseNum,
                value   : action.value,
                history : action.history
            };
        case ROLLBACK:
        {
            let newhistory = [];
            newhistory.push(...state.history);
            newhistory.splice(action.index,1);
            if (action.data.operate == '+')
            { 
                return {
                    ...state,
                    value   : state.value + action.data.value,
                    history : newhistory
                }
            }
            else
            {
                return {
                    ...state,
                    value   : state.value - action.data.value,
                    history : newhistory
                }
            }
        }
        default:
            return state;
    }
}

module.exports = Reducer;