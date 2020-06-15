import React from 'react';
import { comboRaio } from '../resources/buscaCombos';
import SelectItem from './SelectItem';
import { connect } from 'react-redux';
import LocalIcon from  '../assets/local-icon.svg';

const InputLocalERaio = (props) =>
{
    const {local, raio} = props;

    const setRaio = (raio) => props.dispatch({type:"Raio", raio: raio})

    return(
        <div className="inputLocalERaio onde">
            <img className="icon" draggable="false" src={LocalIcon}/>
            <div className="span">Local:</div>
            <input className="local" value={local} onChange={(e)=> props.dispatch({type:"Local", local: e.target.value})} type="search" />
            <SelectItem value={raio} props={{ text: "Raio:", classe:"raio", state: raio, setState: setRaio, items: comboRaio }} />
        </div>
    );
}

const mapStateToProps = ( {changeComboReducer : { local, raio }}) =>{
    return { local, raio }
  }
  export default connect(mapStateToProps)(InputLocalERaio);