import Card from '../card'
import './estilo.css'

const Estudantes = (props) => {
    return (
        
        (props.estudantes.length) > 0 ?  <section className='estudante' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
            <div className='estudantesCard'>
            {props.estudantes.map(estudante => <Card key={estudante.nome} nome={estudante.nome} formacaoAcademica={estudante.formacaoAcademica} linkedin={estudante.linkedin} />)}
            </div>
        </section>
        : ''
    )
}

export default Estudantes