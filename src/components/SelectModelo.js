import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buscaVersao } from '../actions/buscaVersao';
import { bindActionCreators } from 'redux';

const SelectModelo = (props) =>
{
    const { modelo, comboModelo, buscaVersao } = props;

    const disabledSelect = () => (comboModelo != null && comboModelo.length) ? "" : "disabled";

    const trataMudanca = (id) => {
        buscaVersao(id, id === "0" ? comboModelo.map(({ID}) => ID):[id]);
    }

    return(
        <div className="selectBox modelo">
        <label>Modelo:</label>
        <select value={modelo} disabled={disabledSelect()} onChange={(e) => trataMudanca(e.target.value)}>
            <option disabled="disabled" key="-1" value="-1">Selecione...</option>
            <option key="0" value="0">Todos</option>
            {
                comboModelo != null && comboModelo.length > 0 ? comboModelo.map((i) => 
                    <option key={i.ID} value={i.ID}>{i.Name}</option>
                ) : []
            }
        </select>
    </div>
    );
}

const mapStateToProps = ( {changeComboReducer : { modelo }, comboReducer: { comboModelo }}) =>{
    return { modelo, comboModelo }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ buscaVersao }, dispatch);
    
export default connect(mapStateToProps, mapDispatchToProps)(SelectModelo);