
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
    
    return (
        <section className='formulario'>
            <form>
                <h2 className='titulo'>Preencha os Dados para criar o seu card</h2>
                
                <TextArea label="Nome" placeholder="Digite o seu Nome: " />

                <TextArea label="formação acadêmica" placeholder="Digite o Sua formação acadêmica" />

                <TextArea label="Linkedin" placeholder="Digite o url do seu linkedin" />

                <Lista itens={times} label='Lista de estudantes'/>
                <Botao texto="criar Card"/>
            </form>
        </section>
    )
}

export default Formulario