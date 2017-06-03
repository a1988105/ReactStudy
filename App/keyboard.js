import React from 'react';
import ReactDOM from 'react-dom';

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value  : 0
        };
    }
    handleClick = (p) => {
        if (typeof this.props.onChange === 'function') {
            this.props.onChange('', p);
        }
    }
    render() {
        return(
            <div>
              <input type='button' className='btn' value='+' onClick={() => this.handleClick('+')}/>
              <input type='button' value='-'/>
              <input type='button' value='1'/>
              <input type='button' value='2'/>
              <input type='button' value='3'/>
            </div>
        )
    }
}

const keybtn = (props)=>
{
    return(
        <input type='button' value={this.props.val}/>
    )
}

module.exports = Keyboard;