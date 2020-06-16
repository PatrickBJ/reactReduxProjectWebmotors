import React from 'react';
import { connect } from 'react-redux';
import { buscaModelo } from '../actions/buscaModelo';
import { bindActionCreators } from 'redux';

const SelectMarca = (props) =>
{
    const { marca, comboMarca, buscaModelo } = props;

    const disabledSelect = () => (comboMarca != null && comboMarca.length) ? "" : "disabled";

    return(
        <div className="selectBox marca">
        <label>Marca:</label>
        <select value={marca} disabled={disabledSelect()} onChange={(e) => buscaModelo(e.target.value)}>
            <option disabled="disabled" key="-1" value="-1">Selecione...</option>
            {
                comboMarca != null && comboMarca.length > 0 ? comboMarca.map((i) => 
                    <option key={i.ID} value={i.ID}>{i.Name}</option>
                ) : []
            }
        </select>
    </div>
    );
}

const mapStateToProps = ( {changeComboReducer : { marca }, comboReducer: { comboMarca, comboModelo }}) =>{
    return { marca, comboMarca, comboModelo }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ buscaModelo }, dispatch);
    
export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);