
import { useState } from 'react'
import Botao from '../Botao'
import Lista from '../Lista'
import TextArea from '../TextArea/TextArea'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Estudantes do CEUB',
        'Estudantes do IESB',
        'Estudantes da Católica',
        'Estudantes da Unieuro',
        'Estudantes da Projeção'
        
    ]
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Form foi submetido", `${nome}, ${cargo}, ${imagem}`)
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2 className='titulo'>Preencha os Dados para criar o seu card</h2>
                
                <TextArea obrigatorio={true} label="Nome" placeholder="Digite o seu Nome: " value_of={nome} aoSwitch={value_of => setNome(value_of)} />

                <TextArea obrigatorio={true} label="formação acadêmica" placeholder="Digite o Sua formação acadêmica" value_of={cargo} aoSwitch={value_of => setCargo(value_of)}/>

                <TextArea obrigatorio={true} label="Linkedin" placeholder="Digite o url do seu linkedin" value_of={imagem} aoSwitch={value_of => setImagem(value_of)}/>

                <Lista itens={times} label='Lista de estudantes'/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario