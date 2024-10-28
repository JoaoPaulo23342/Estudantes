
import { useState } from 'react'
import Botao from '../components/Botao'
import Lista from '../components/Lista'
import TextArea from '../components/TextArea/TextArea'
import './Formulario.css'

const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [formacaoAcademica, setFormacaoAcademica] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [estudantes, setEstudantes] = useState('')
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.estudanteLogin({
            nome,
            formacaoAcademica,
            linkedin,
            estudantes
        })
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2 className='titulo'>Preencha os Dados para criar o seu card</h2>
                
                <TextArea obrigatorio={true} label="Nome" placeholder="Digite o seu Nome: " value_of={nome} aoSwitch={value_of => setNome(value_of)} />

                <TextArea obrigatorio={true} label="formação acadêmica" placeholder="Digite o Sua formação acadêmica" value_of={formacaoAcademica} aoSwitch={value_of => setFormacaoAcademica(value_of)}/>

                <TextArea obrigatorio={true} label="foto do Linkedin" placeholder="Digite o url da sua foto do linkedin" value_of={linkedin} aoSwitch={value_of => setLinkedin(value_of)}/>

                <Lista obrigatorio={true} itens={props.estudantes} label='Lista de estudantes' value_of={estudantes} aoSwitch={value_of => setEstudantes(value_of)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario