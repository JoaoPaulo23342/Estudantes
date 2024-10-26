import './TextArea.css'

const TextArea = (props) => {
    
    let value_of = 'Paulo'

    const Typed =  (ev) => {
        value_of = ev.target.value
        console.log(value_of)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={Typed} required={props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    )
}
export default TextArea