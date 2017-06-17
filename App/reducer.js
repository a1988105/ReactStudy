import { 
    CALCULATE, 
    FETCHDATASUCCESS,
    ROLLBACK
} from './Action/ActionType';

const initStateFromLocal = {
    value   : 0,
    baseNum : 1,
    history : []
}

const initStateFromAjax = {
    isFetching : true
}

const Reducer = (state = initStateFromAjax, action) => {
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
            const {baseNum,value,history,keyboardData} = action.value;
            return {
                ...state,
                baseNum,
                value,
                history,
                keyboardData,
                isFetching : false
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