import React, {useState} from 'react';
import { connect } from 'react-redux';
import { buscaModelo } from '../actions/buscaModelo';
import { buscaMarca } from '../actions/buscaMarca';
import { bindActionCreators } from 'redux';

import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';

const SelectMarca = (props) =>
{
    const { marca, comboMarca, recarregarComboMarca, buscaMarca, buscaModelo } = props;

    const disabledSelect = () => (comboMarca != null && comboMarca.length) ? "" : "disabled";

    const trataMudanca = (id) => {
        buscaModelo(id, id === "0" ? comboMarca.map(({ID}) => ID):[id]);
    }

    //#region snackbar
    function SlideTransition(props) {
        return <Slide {...props} direction="down" />;
    }
    //#endregion

    return(
        <div className="selectBox marca">
            <label>Marca:</label>
            <select value={marca} disabled={disabledSelect()} onChange={(e) => trataMudanca(e.target.value) }>
                <option disabled="disabled" key="-1" value="-1">Selecione...</option>
                <option key="0" value="0">Todas</option>
                {
                    comboMarca != null && comboMarca.length > 0 ? comboMarca.map((i) => 
                        <option key={i.ID} value={i.ID}>{i.Name}</option>
                    ) : []
                }
            </select>

            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open= {recarregarComboMarca}
                action={
                    <IconButton 
                        color="inherit"
                        onClick={()=> buscaMarca()}
                    >
                        <RefreshIcon/>
                    </IconButton>
                }
                TransitionComponent={SlideTransition}
                message="Não foi possível carregar os dados da API"
            />
        </div>
    );
}

const mapStateToProps = ( {changeComboReducer : { marca }, comboReducer: { comboMarca, recarregarComboMarca, comboModelo }}) =>{
    return { marca, comboMarca, recarregarComboMarca, comboModelo }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ buscaModelo, buscaMarca }, dispatch);
    
export default connect(mapStateToProps, mapDispatchToProps)(SelectMarca);