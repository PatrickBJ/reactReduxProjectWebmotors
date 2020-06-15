import React, { useState } from 'react';
import { comboAno, comboPreco } from '../resources/buscaCombos';
import { connect } from 'react-redux';
import InputLocalERaio from './InputLocalERaio';
import SelectItem from './SelectItem';
import SelectMarca from './SelectMarca';
import SelectModelo from './SelectModelo';
import SelectVersao from './SelectVersao';

import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CarroIcon from '../assets/carro-icon.svg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const CarroText1 = "COMPRAR";
const CarroText2 = "CARROS";

const Carros = (props) =>
{
    const [novosckb, setNovosckb] = useState(true);
    const [usadosckb, setUsadosckb] = useState(false);
    const [ano, setAno] = useState('2020');
    const [preco, setPreco] = useState("30 - 40");

    const limparFiltros = ()=>{
      setNovosckb(true);
      setUsadosckb(false);
      props.dispatch({type:"Marca", marca: 0});
      props.dispatch({type:"Modelo", modelo: 0});
      props.dispatch({type:"Versao", versao: 0});
      props.dispatch({type:"Local", local: ''});
      props.dispatch({type:"Raio", raio: -1});
      setAno(-1);
      setPreco(-1);
    }

    return(
      <div className="form">
        <FormControlLabel className="checkbox1"
          control={
              <Checkbox
                  checked = {novosckb}
                  size = 'small'
                  onChange = {(e)=> setNovosckb(e.target.checked)} 
                  />
                }
                label="Novos"
          />
          <FormControlLabel className="checkbox2"
            control={
              <Checkbox
                  checked = {usadosckb} 
                  size = 'small'
                  onChange = {(e)=> setUsadosckb(e.target.checked)} 
              />
            }
            label="Usados"
          />

          <InputLocalERaio/>
          <SelectMarca/>
          <SelectModelo/>
          <SelectItem props={{ text: "Ano Desejado:", classe:"selectBox ano", state: ano, setState: setAno, items: comboAno }} />
          <SelectItem props={{ text: "Faixa de Preço:", classe:"selectBox preco", state: preco, setState: setPreco, items: comboPreco }} />
          <SelectVersao/>

          <Link className="busca-avancada">
              <ChevronRightIcon />
              <p>Busca Avançada</p>
          </Link>

          <Link className="limpar-filtros" onClick={() => limparFiltros()}>
            Limpar filtros
          </Link>

          <Button className="ver-ofertas" variant="contained" color="secondary">
            Ver Ofertas
          </Button>
        </div>
    );
}
const mapStateToProps = ( {changeComboReducer : { marca }}) =>{
  return { marca }
}
export default connect(mapStateToProps)(Carros);
export { CarroIcon, CarroText1, CarroText2 }