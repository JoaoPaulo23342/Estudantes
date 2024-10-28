import Card from '../card'
import './Estudantes.css'

const Estudantes = (props) => {
    return (
        
        <section className='estudante' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
            {props.Estudantes.map(Estudante => <Card />)}
        </section>
    )
}

export default Estudantes