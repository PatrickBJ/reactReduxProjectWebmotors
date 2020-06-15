import React, { useEffect, useState } from 'react';
import logo from '../assets/webmotors-logo.svg';


const Cabecalho = (props) =>
{
    const [animacao, setAnimacao] = useState('animacao-inicial');
    useEffect(() => {
      setTimeout(() => { setAnimacao('animacao-hover') }, 2000);
    });

    return(
        <div className="cabecalho">
          <img src={logo} className={animacao} draggable="false" alt="webmotors logo"/>
        </div>
    );
}

export default Cabecalho;