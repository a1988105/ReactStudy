import 'whatwg-fetch';
import { 
    CALCULATE, 
    FETCHDATASUCCESS,
    ROLLBACK
} from './ActionType.js';

const action = {
    calculate: (entervalue) => ({ type: CALCULATE, entervalue }),
    rollback: (data, index) =>({ type : ROLLBACK, data, index}),
    fetchData: () => {
        return async (dispatch) => {
            const response = await fetch('/data/data.json')
            const json = await response.json()
            dispatch({
                type : FETCHDATASUCCESS,
                value: json
            })
        }
    }
}

module.exports = action;