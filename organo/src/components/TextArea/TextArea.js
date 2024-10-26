import { useState } from 'react'
import './TextArea.css'

const TextArea = (props) => {
    
    let value_of = ''

    const [] = useState('')

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