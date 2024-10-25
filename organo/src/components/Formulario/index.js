
import Lista from '../Lista'
import TextArea from '../TextArea/TextArea'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Estudantes do CEUB',
        'Estudantes do IESB',
        'Estudantes da Católica',
        'Estudantes da Unieuro'
        
    ]
    
    return (
        <section className='formulario'>
            <form>
                <h2 className='titulo'>Preencha os Dados para criar o seu card</h2>
                
                <TextArea label="Nome" placeholder="Digite o seu Nome: " />

                <TextArea label="formação acadêmica" placeholder="Digite o Sua formação acadêmica" />

                <TextArea label="Nome da Universidade" placeholder="Digite o nome da sua universidade" />

                <Lista itens={times}/>
            </form>
        </section>
    )
}

export default Formulario