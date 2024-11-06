
import './TextArea.css'

const TextArea = (props) => {
    
    

    // const [value_of, setValue] = useState('')

    const Typed =  (ev) => {
        props.aoSwitch(ev.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value_of} onChange={Typed} required={props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    )
}
export default TextArea