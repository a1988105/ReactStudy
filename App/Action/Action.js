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
        return (dispatch) => {
            fetch('/data/data.json')
            .then((response) => response.json())
            .then((data) => dispatch({
                type: FETCHDATASUCCESS,
                value: data
            }));
        }
    }
}

module.exports = action;