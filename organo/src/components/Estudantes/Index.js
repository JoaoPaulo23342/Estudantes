import Card from '../card'
import './estilo.css'

const Estudantes = (props) => {
    return (
        
        <section className='estudante' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
            {props.estudantes.map(estudante => <Card key={estudante.nome} />)}
        </section>
    )
}

export default Estudantes