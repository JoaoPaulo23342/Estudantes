import './Estudantes.css'

const Estudantes = (props) => {
    return (
        <section className='estudante'>
            <h3>{props.nome}</h3>
        </section>
    )
}

export default Estudantes