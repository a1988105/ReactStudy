import React from 'react';
import PropTypes from 'prop-types';

class Keyboard extends React.Component {

    handleClick = (enterValue) => {
        this.props.calculatefn(enterValue);
    }

    render() {

        const {props} = this;
        const btn = [];

        props.keyboardData.map((data,index) => {
                const clsssn = (props.baseNum == data) ? 'btn active' : 'btn';
                btn.push(<input key={'kb_'+ index} type='button' className={clsssn} value={data} onClick={() => this.handleClick(data)} />);
        });

        return (
            <div>
                {btn}
            </div>
        )
    }
}

Keyboard.propTypes = {
  calculatefn   : PropTypes.func.isRequired,
  keyboardData  : PropTypes.array.isRequired,
  baseNum       : PropTypes.number.isRequired
};

module.exports = Keyboard;