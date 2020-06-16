import React, { useState } from 'react';
import { comboAno, comboPreco } from '../resources/buscaCombos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { limpaFiltros } from '../actions/limpaFiltros';
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
import ArrowIcon from '../assets/arrow-icon.svg';

const CarroText1 = "COMPRAR";
const CarroText2 = "CARROS";

const Carros = (props) =>
{
    const [novosckb, setNovosckb] = useState(true);
    const [usadosckb, setUsadosckb] = useState(false);
    const [ano, setAno] = useState('2020');
    const [preco, setPreco] = useState("30 - 40");

    const { limpaFiltros } = props;

    const limparFiltros = ()=>{
      setNovosckb(true);
      setUsadosckb(false);
      limpaFiltros();
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
              <img className="icon" draggable="false" src={ArrowIcon}/>
              <p>Busca Avançada</p>
          </Link>

          <Link className="limpar-filtros" onClick={() => limparFiltros()}>
            Limpar filtros
          </Link>

          <Button style={{fontWeight: 'bold', fontSize: '0.8rem'}} className="ver-ofertas" variant="contained" color="secondary">
            Ver Ofertas
          </Button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ limpaFiltros }, dispatch);

export default connect(null, mapDispatchToProps)(Carros);
export { CarroIcon, CarroText1, CarroText2 }