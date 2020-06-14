import React from 'react';
import { connect } from 'react-redux';

const SelectVersao = (props) =>
{
    const { versao, comboVersao } = props;

    return(
        <div className="selectBox versao">
        <label>Versão:</label>
        <select value={versao} onChange={(e) => props.dispatch({type:"Versao", versao: e.target.value})}>
        {
            comboVersao != null && comboVersao.length > 0 ? comboVersao.map((i) => 
                <option key={i.ID} value={i.ID}>{i.Name}</option>
            ) : []
        }
        </select>
    </div>
    );
}

const mapStateToProps = ( {changeComboReducer : { versao }, comboReducer: { comboVersao }}) =>{
    return { versao, comboVersao }
}

export default connect(mapStateToProps)(SelectVersao);