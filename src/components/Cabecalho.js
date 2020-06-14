import React from 'react';
import logo from '../assets/webmotors-logo.svg';

const Cabecalho = (props) =>
{
    return(
        <div className="cabecalho">
          <img src={logo} alt="webmotors logo"/>
        </div>
    );
}

export default Cabecalho;