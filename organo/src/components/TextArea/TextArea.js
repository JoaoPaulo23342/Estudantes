import './TextArea.css'

const TextArea = (props) => {
    
    const aoDigitado =  (ev) => {
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