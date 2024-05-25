import './formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botão';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [imagem, setImagem] = useState('')
    const [tier, setTier] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            imagem,
            tier,
        })
        setNome('')
        setImagem('')
        setTier('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Tier.</h2>
                <CampoTexto 
                     obrigatorio={true}
                     label="Nome"
                     placeholder="Digite o nome do card" 
                     valor={nome}
                     aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite seu link de Imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Tier" 
                    itens={props.tiers}
                    valor={tier}
                    aoAlterado={valor => setTier(valor)} 
                />
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )

}

export default Formulario