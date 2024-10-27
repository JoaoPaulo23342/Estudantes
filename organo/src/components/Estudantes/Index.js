import './Estudantes.css'

const Estudantes = (props) => {
    return (
        
        <section className='estudante' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
        </section>
    )
}

export default Estudantes