import React, { useState } from 'react';
import Carros, { CarroIcon, CarroText1, CarroText2 } from './Carros';
import { MotoIcon, MotoText1, MotoText2 } from './Motos';
import Button from '@material-ui/core/Button';

const Abas = (props) =>
{
    const [value, setValue] = React.useState(0);

    return(
          <div className="content">
            <div className="tabs">
            <button className={`tabs-button tabs-button1 ${value === 0 ? "tabs-button-active" : ""}`} onClick={() => setValue(0)}>
                <img className="icon" src={CarroIcon}/>
                <div className="span-1">{CarroText1}</div>
                <div className="span-2">{CarroText2}</div>
            </button>
            <button className ={`tabs-button tabs-button2 ${value === 1 ? "tabs-button-active" : ""}`} onClick={() => setValue(1)}>
                <img className="icon" src={MotoIcon}/>
                <div className="span-1">{MotoText1}</div>
                <div className="span-2">{MotoText2}</div>
            </button> 
            <Button className="tabs-button3" variant="outlined">
              Vender meu carro
            </Button>
          </div>
          <Carros/>
        </div>
    );
}

export default Abas;