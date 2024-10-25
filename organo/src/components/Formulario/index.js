
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
    const aoSalvar = (evento) => {
        evento.preventDefault()
        alert("Form foi submetido")
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2 className='titulo'>Preencha os Dados para criar o seu card</h2>
                
                <TextArea obrigatorio={true} label="Nome" placeholder="Digite o seu Nome: " />

                <TextArea obrigatorio={true} label="formação acadêmica" placeholder="Digite o Sua formação acadêmica" />

                <TextArea obrigatorio={true} label="Linkedin" placeholder="Digite o url do seu linkedin" />

                <Lista itens={times} label='Lista de estudantes'/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario