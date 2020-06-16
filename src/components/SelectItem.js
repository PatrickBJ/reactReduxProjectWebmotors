import React from 'react';

const SelectItem = ({props}) =>
{
    const {text, classe, state, setState, items } = props;

    const disabledSelect = () => (items != null && items.length) ? "" : "disabled";

    return(
        <div className={classe}>
            <label>{text}</label>
            <select value={state} disabled={disabledSelect()} onChange={(e) => setState(e.target.value)}>
                <option disabled="disabled" key="-1" value="-1">Selecione...</option>
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