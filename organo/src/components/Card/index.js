import './Card.css'

const Card = (props) => {
    return (
        <div className='estudante1'>
            <div className='cabecalho'>
                <img src='https://github.com/JoaoPaulo23342.png' alt=''></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.formacaoAcademica}</h5>
            </div>
        </div>
    )
}
export default Card