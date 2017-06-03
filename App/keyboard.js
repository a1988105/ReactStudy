import React from 'react';
import ReactDOM from 'react-dom';

class Keyboard extends React.Component {

    handleClick = (p) => {
        if (typeof this.props.onClickfn === 'function') {
            this.props.onClickfn(p);
        }
    }

    render() {
        const btn = [];
        this.props.kb.forEach((item) => {
            item.forEach((i) => {
                // To resolve warning of "Each child in an array or iterator should have a unique "key" prop."
                const keyid = 'kb_' + i;
                const clsssn = (this.props.bNum == i) ? 'btn active' : 'btn';

                btn.push(<input key={keyid.toString()} type='button' className={clsssn} value={i} onClick={() => this.handleClick(i)} />);
            })
        });
        return (
            <div>
                {btn}
            </div>
        )
    }
}

module.exports = Keyboard;