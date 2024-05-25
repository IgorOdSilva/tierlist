import './cardTier.css'

const CardTier = (props) => {

  return (
    <div className='colaborador'>
        <div className='cabecalho'>
            <img src={props.imagem} alt={props.nome}></img>
        </div>
        <div className='rodape'>
            <h5>{props.nome}</h5>
        </div>
    </div>
  )
}

export default CardTier