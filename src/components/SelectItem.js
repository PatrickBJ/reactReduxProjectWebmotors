import React from 'react';

const SelectItem = ({props}) =>
{
    const {text, classe, state, setState, items } = props;
    return(
        <div className={`selectBox ${classe}`}>
        <label>{text}</label>
        <select value={state} onChange={(e) => setState(e.target.value)}>
            <option hidden></option>
            {
                items.map((i) => 
                    <option key={i} value={i}>{i}</option>
                )
            }
        </select>
    </div>
    );
}

export default SelectItem;