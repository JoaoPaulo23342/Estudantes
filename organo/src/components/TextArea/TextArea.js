import './TextArea.css'

const TextArea = (props) => {
    
    let value_of = ''

    const aoDigitado =  (ev) => {
        value_of = ev.target.value
        console.log(ev.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    )
}
export default TextArea