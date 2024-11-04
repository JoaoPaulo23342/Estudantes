import './Card.css'

const Card = ({ nome, linkedin, formacaoAcademica, corDeFundo }) => {
    return (
        <div className='estudante1'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={linkedin} alt='imagem'/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{formacaoAcademica}</h5>
            </div>
        </div>
    )
}
export default Card