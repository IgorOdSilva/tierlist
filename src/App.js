import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {
  const tiers = [
    {
      nome: 'Elite',
      corPrimaria:'#00ff00',
      corSecundaria:''
    },
    {
      nome: 'Bom',
      corPrimaria:'#98fb98',
      corSecundaria:''
    },
    {
      nome: 'Até que Vai',
      corPrimaria:'#ffb22e',
      corSecundaria:''
    },
    {
      nome: 'Horrível',
      corPrimaria:'#ff4500',
      corSecundaria:''
    }
  ]

  
  const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    }
  return (
    <div className="App">
      <Banner />
      <Formulario  tiers={tiers.map(tier => tier.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {tiers.map(tier => <Time 
        key={tier.nome} 
        nome={tier.nome} 
        corPrimaria={tier.corPrimaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.tier === tier.nome)}
      />)}
    </div>
    
  );
}

export default App;
