import './Lista.css'

const Lista = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={ev => props.aoSwitch(ev.target.value)} required={props.required} value={props.value_of}>
                <option value=''></option>
                {props.itens.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )

}

export default Lista