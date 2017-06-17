import React from 'react';

const Historys = ({data,rollbackFn}) => {
    const listItems = data.map((data,index) =>
        <li key={'li_' + index}>{data.text} <input key={index} type='button' value='刪除' onClick={() => rollbackFn(data,index)} /></li>
    );

    return (
        <div>
               <ul className='history'>{listItems}</ul>
        </div>
    )
}

module.exports = Historys;