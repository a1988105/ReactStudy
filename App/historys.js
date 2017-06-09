import React from 'react';
import ReactDOM from 'react-dom';


const Historys = ({data,onClickfn}) => {
    const listItems = data.map((d,index) =>
    <li key={'li_' + index}>{d.text} <input key={index} type='button' value='刪除' onClick={() => onClickfn(d,index)} /></li>
    );
    return (
        <div>
               <ul className='history'>{listItems}</ul>
        </div>
    )
}

module.exports = Historys;