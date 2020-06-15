import React from 'react';

const SelectItem = ({props}) =>
{
    const {text, classe, state, setState, items } = props;

    const disabledSelect = () => (items != null && items.length) ? "" : "disabled";
    const disabledLabel = () => (items != null && items.length) ? null : {color: 'gray'};

    return(
        <div className={classe}>
            <label style={disabledLabel()}>{text}</label>
            <select value={state} disabled={disabledSelect()} onChange={(e) => setState(e.target.value)}>
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