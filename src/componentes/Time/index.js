import React from 'react';
import CardTier from '../CardTier';
import './time.css';

const Time = (props) => {

  return (
    props.colaboradores.length > 0 &&
    <section className='time' style={{ backgroundColor: props.corPrimaria }}>
      <h3>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map(colaborador =>
          <CardTier
            key={colaborador.nome}
            nome={colaborador.nome}
            imagem={colaborador.imagem}
          />)}
      </div>
    </section>
  )
}

export default Time;
